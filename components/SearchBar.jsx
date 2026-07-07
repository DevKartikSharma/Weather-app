'use client'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function SearchBar({ city, setcity, setweather, sethour,setweathercity }) {
  const popularCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Delhi']

  // useEffect(() => {
  //   console.log(city);
  // }, [city])
  async function getGeocode(e) {
    try {
      e?.preventDefault();
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      const data = await res.json();
      const lat = data.results[0].latitude;
      const long = data.results[0].longitude;
      console.log(lat);
      console.log(long);
      if (lat) {
        const cwres = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,uv_index&timezone=auto`);
        const cwdata = await cwres.json();
        console.log(cwdata);
        
        
        const hfres = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code&forecast_hours=13&timezone=auto`);
        const hfdata = await hfres.json();
        console.log(hfdata);
        
        
        setweather({
          temp: cwdata.current.temperature_2m,
          apparentTemp: cwdata.current.apparent_temperature,
          condition: cwdata.current.weather_code,
          wind: cwdata.current.wind_speed_10m,
          humidity: cwdata.current.relative_humidity_2m,
          uv: cwdata.current.uv_index,
        })
        
        const formatedhour = hfdata.hourly.time.map((time, index) => ({
          time: hfdata.hourly.time[index].split("T")[1],
          temp: hfdata.hourly.temperature_2m[index],
          condition: hfdata.hourly.weather_code[index],
        }));
        console.log(formatedhour)
        sethour(formatedhour)
        setweathercity(city);
      } else {
        console.log("Invalid Location");
      }

    } catch (e) {
      if (e) {
        console.log(e.status);
      }
    }
  }
  return (

    <div className="w-full">
      <form className="mb-6" onSubmit={getGeocode}>
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-slate-600/50 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-5" />
            <input
              value={city}
              onChange={(e) => setcity(e.target.value)}
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
        {popularCities.map((city) => (
          <button
            key={city}
            className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-slate-700/50 font-medium"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}
