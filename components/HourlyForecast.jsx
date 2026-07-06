import { Cloud, Sun } from 'lucide-react'

export default function HourlyForecast() {
  const hours = [
    { time: '00:00', temp: 18, icon: Cloud },
    { time: '01:00', temp: 17, icon: Cloud },
    { time: '02:00', temp: 16, icon: Cloud },
    { time: '03:00', temp: 16, icon: Cloud },
    { time: '04:00', temp: 15, icon: Cloud },
    { time: '05:00', temp: 14, icon: Cloud },
    { time: '06:00', temp: 14, icon: Sun },
    { time: '07:00', temp: 15, icon: Sun },
    { time: '08:00', temp: 16, icon: Sun },
    { time: '09:00', temp: 18, icon: Sun },
    { time: '10:00', temp: 19, icon: Sun },
    { time: '11:00', temp: 20, icon: Sun },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Hourly Forecast</h3>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-3 min-w-max">
          {hours.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-200 ${
                  index === 0
                    ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30'
                }`}
              >
                <span className="text-sm font-semibold text-slate-300">{item.time}</span>
                <IconComponent className={`w-6 h-6 ${item.icon === Sun ? 'text-yellow-400' : 'text-slate-400'}`} />
                <span className="text-lg font-bold text-white">{item.temp}°</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
