import { Cloud, Sun } from 'lucide-react'
import { getWeather } from '../lib/weather';

export default function HourlyForecast({ hour }) {

  return (hour[1] &&
    <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Hourly Forecast</h3>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-3 min-w-max">
          {hour.map((item, index) => {
            const Weather = getWeather(item.condition);
            const Icon = Weather.Icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-200 ${index === 0
                  ? 'bg-linear-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/50 shadow-lg shadow-blue-500/20'
                  : 'bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30'
                  }`}
              >
                <span className="text-sm font-semibold text-slate-300">{item.time}</span>
                <Icon className={`w-6 h-6 ${Weather.color}`} />
                <span className="text-lg font-bold text-white">{item.temp}°</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
