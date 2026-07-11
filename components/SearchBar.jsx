'use client'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function SearchBar({ city, setcity, setweather, sethour, hour, setweathercity, setday, setloading }) {
  const [query, setquery] = useState('');
  const popularCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Delhi']
  async function handlePopular(pcity) {
    await setcity(pcity);
  }

  useEffect(() => {
    if (city) {
      getGeocode();
    }
  }, [city])

  async function getGeocode(e) {
    const searchTerm = (query || city).trim();
    e?.preventDefault();

    if (!searchTerm) {
      setloading(false);
      return;
    }

    try {
      setloading(true);
      setcity(searchTerm);

      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      const result = data.results?.[0];

      if (!result?.latitude || !result?.longitude) {
        console.log("Invalid Location");
        return;
      }

      const lat = result.latitude;
      const long = result.longitude;

      const [cwres, hfres, dfres] = await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,uv_index&timezone=auto`),
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code&forecast_hours=12&timezone=auto`),
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`),
      ]);

      const [cwdata, hfdata, dfdata] = await Promise.all([cwres.json(), hfres.json(), dfres.json()]);

      setweather({
        temp: cwdata.current.temperature_2m,
        apparentTemp: cwdata.current.apparent_temperature,
        condition: cwdata.current.weather_code,
        wind: cwdata.current.wind_speed_10m,
        humidity: cwdata.current.relative_humidity_2m,
        uv: cwdata.current.uv_index,
      });

      const formatedhour = hfdata.hourly.time.map((time, index) => ({
        time: hfdata.hourly.time[index].split("T")[1],
        temp: hfdata.hourly.temperature_2m[index],
        condition: hfdata.hourly.weather_code[index],
      }));
      sethour(formatedhour);

      const formattedday = dfdata.daily.time.map((time, index) => ({
        day: new Date(time)
          .toLocaleDateString("en-US", { weekday: "short" })
          .toUpperCase(),
        date: new Date(time)
          .toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
          })
          .toUpperCase(),
        min_temp: dfdata.daily.temperature_2m_min[index],
        max_temp: dfdata.daily.temperature_2m_max[index],
        condition: dfdata.daily.weather_code[index],
      }));

      setday(formattedday);
      setquery("");
      setweathercity(searchTerm);
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }
  return (

    <div className={`w-full ${hour[1]?"mb-5":"mb-10"} `}>
      <form className="mb-6 w-full" onSubmit={getGeocode}>
        <div className="relative group w-full">
          <div className="w-full absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-slate-600/50 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-5" />
            <input
              value={query}
              onChange={(e) => setquery(e.target.value)}
              type="text"
              placeholder="Search for a city..."
              className="flex-1 bg-transparent px-4 py-4 text-white placeholder-slate-500 focus:outline-none text-lg"

            />
            <button
              type="button"
              onClick={getGeocode}
              className="mr-2 px-6 py-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap gap-3 justify-center">
        {popularCities.map((pcity) => (
          <button
            onClick={() => handlePopular(pcity)}
            key={pcity}
            className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-slate-700/50 font-medium"
          >
            {pcity}
          </button>
        ))}
      </div>
    </div>
  )
}
