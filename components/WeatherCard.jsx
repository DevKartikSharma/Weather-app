'use client'

import { Cloud, Sun, Wind, Droplets, Eye } from 'lucide-react'
import { getWeather } from '../lib/weather'

export default function WeatherCard({ weather, weathercity }) {
  function uvLevel(uv) {
    if (uv <= 2) return 'Low'
    if (uv <= 5) return 'Moderate'
    if (uv <= 7) return 'High'
    return 'Very High'
  }

  if (!weather?.temp) return null

  const Weather = getWeather(weather.condition)
  const Icon = Weather.Icon

  return (
    <div className="rounded-3xl border border-slate-700/30 bg-linear-to-br from-slate-800/50 to-slate-900/50 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out hover:scale-102 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1 text-center lg:text-left">
          <h2 className="wrap-break-word text-3xl font-bold text-white sm:text-4xl md:text-5xl pt-7 md:pt-0 lg:text-6xl">
            {weathercity.charAt(0).toUpperCase() + weathercity.slice(1)}
          </h2>

          <p className="mt-2 text-lg text-slate-400 sm:text-xl">
            {Weather.label}
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-center sm:gap-4 lg:justify-start">
            <span className="text-4xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              {weather.temp}°
            </span>

            <span className="text-base text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
              Feels like {weather.apparentTemp}°C
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end transition-transform duration-300 ease-out hover:scale-110 ">
          <div className="rounded-2xl bg-slate-700/30 p-4 sm:p-5 md:p-6">
            <Icon
              className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 ${Weather.color}`}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-700/30 pt-8 lg:grid-cols-4 ">
        <div className="rounded-2xl bg-slate-800/30 p-4 text-center transition hover:bg-slate-800/50 group  ">
          <div className="mb-2 flex items-center justify-center gap-2 text-slate-400 transition-transform duration-300 ease-out group-hover:scale-110">
            <Wind className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Wind Speed</span>
          </div>

          <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl ">
            {weather.wind} km/h
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/30 p-4 text-center transition hover:bg-slate-800/50 group">
          <div className="mb-2 flex items-center justify-center gap-2 text-slate-400 transition-transform duration-300 ease-out group-hover:scale-110">
            <Droplets className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Humidity</span>
          </div>

          <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
            {weather.humidity}%
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/30 p-4 text-center transition hover:bg-slate-800/50 group">
          <div className="mb-2 flex items-center justify-center gap-2 text-slate-400 transition-transform duration-300 ease-out group-hover:scale-110">
            <Eye className="h-5 w-5" />
            <span className="text-xs sm:text-sm">Condition</span>
          </div>

          <p className="text-lg font-bold text-blue-400 sm:text-xl lg:text-2xl">
            {Weather.label}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/30 p-4 text-center transition hover:bg-slate-800/50 group">
          <div className="mb-2 flex items-center justify-center gap-2 text-slate-400 transition-transform duration-300 ease-out group-hover:scale-110">
            <Sun className="h-5 w-5" />
            <span className="text-xs sm:text-sm">UV Index</span>
          </div>

          <p className="text-lg font-bold text-yellow-400 sm:text-xl lg:text-2xl">
            {weather.uv} | {uvLevel(weather.uv)}
          </p>
        </div>
      </div>
    </div>
  )
}