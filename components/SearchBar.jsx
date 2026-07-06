'use client'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function SearchBar({ city, setcity, setweather }) {
  const popularCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Delhi']

  useEffect(() => {
    console.log(city);
  }, [city])
  async function getGeocode(e) {
    e?.preventDefault();
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    const data = await res.json();
    console.log(data);
    const lat = data.results[0].latitude;
    const long = data.results[0].longitude;
    console.log(lat);
    console.log(long);
    const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,uv_index&timezone=auto`);
    const data2 = await res2.json();
    console.log(data2);

    setweather({
      temp: data2.current.temperature_2m,
      apparentTemp: data2.current.apparent_temperature,
      condition: data2.current.weather_code,
      wind: data2.current.wind_speed_10m,
      humidity: data2.current.relative_humidity_2m,
      uv: data2.current.uv_index,
    })
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
