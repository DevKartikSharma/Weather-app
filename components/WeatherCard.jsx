'use client'
import { Cloud, Sun, Wind, Droplets, Eye } from 'lucide-react'
import { useState } from 'react'
import { getWeather } from "../lib/weather";

export default function WeatherCard({ weather, weathercity }) {
  function uvLevel(uv) {
    if (uv <= 2) return "Low";
    if (uv <= 5) return "Moderate";
    if (uv <= 7) return "High";
    return "Very High";

  }
  const Weather = getWeather(weather.condition);
  const Icon = Weather.Icon;

  return (weather.temp &&
    <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-8 md:p-12 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">{weathercity.charAt(0).toUpperCase() + weathercity.slice(1)}
          </h2>
          <p className="text-slate-400 text-xl mb-6">{`${Weather.label}`}</p>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-7xl font-bold text-white">{weather.temp}°C</span>
            <span className="text-2xl text-slate-400">Feels like {weather.apparentTemp}°C</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="p-6 bg-slate-700/30 rounded-2xl">
            <Icon className={`w-16 h-16 ${Weather.color}`} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700/30 *:flex *:flex-col *:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Wind className="w-5 h-5" />
            <span className="text-sm">Wind Speed</span>
          </div>
          <p className="text-2xl font-bold text-white">{weather.wind} km/h</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Droplets className="w-5 h-5" />
            <span className="text-sm">Humidity</span>
          </div>
          <p className="text-2xl font-bold text-white">{weather.humidity}%</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Eye className="w-5 h-5" />
            <span className="text-sm">Condition</span>
          </div>
          <p className="text-2xl font-bold text-blue-400">{Weather.label}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Sun className="w-5 h-5" />
            <span className="text-sm">UV Index</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">{`${weather.uv} | ${uvLevel(weather.uv)}`}</p>
        </div>
      </div>
    </div>
  )
}
