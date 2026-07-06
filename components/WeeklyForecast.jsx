import { Cloud, Sun } from 'lucide-react'

export default function WeeklyForecast() {
  const forecast = [
    { day: 'Mon', date: 'Jan 20', high: 22, low: 16, icon: Sun },
    { day: 'Tue', date: 'Jan 21', high: 20, low: 15, icon: Cloud },
    { day: 'Wed', date: 'Jan 22', high: 18, low: 13, icon: Cloud },
    { day: 'Thu', date: 'Jan 23', high: 17, low: 12, icon: Cloud },
    { day: 'Fri', date: 'Jan 24', high: 19, low: 14, icon: Sun },
    { day: 'Sat', date: 'Jan 25', high: 21, low: 15, icon: Sun },
    { day: 'Sun', date: 'Jan 26', high: 23, low: 17, icon: Sun },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">7-Day Forecast</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {forecast.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 px-4 py-6 rounded-2xl bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200"
            >
              <span className="text-sm font-semibold text-slate-300">{item.day}</span>
              <span className="text-xs text-slate-400">{item.date}</span>
              
              <IconComponent className={`w-8 h-8 ${item.icon === Sun ? 'text-yellow-400' : 'text-slate-400'}`} />

              <div className="flex gap-2 items-center justify-center">
                <span className="text-lg font-bold text-white">{item.high}°</span>
                <span className="text-sm text-slate-400">{item.low}°</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
