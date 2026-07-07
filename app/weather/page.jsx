'use client'
import SearchBar from '../../components/SearchBar'
import WeatherCard from '../../components/WeatherCard'
import HourlyForecast from '../../components/HourlyForecast'
import WeeklyForecast from '../../components/WeeklyForecast'
import { useEffect, useState } from 'react'

export default function Home() {
    const [city, setcity] = useState("");
    const [weathercity, setweathercity] = useState("");
    const [weather, setweather] = useState({
        temp: null,
        apparentTemp: null,
        condition: null,
        wind: null,
        humidity: null,
        uv: null,
    })
    const [hour, sethour] = useState([]);
    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center mb-8">

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Weather</h1>
                    <p className="text-slate-400">Get real-time weather updates for any city</p>
                </div>

                <SearchBar city={city} setcity={setcity} setweather={setweather} setweathercity={setweathercity} sethour={sethour} />
                <WeatherCard weather={weather} weathercity={weathercity} />
                <HourlyForecast hour={hour} />
                <WeeklyForecast />
            </div>
        </main>
    )
}
