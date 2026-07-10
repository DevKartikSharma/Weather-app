'use client'
import { AnimatePresence, motion } from "framer-motion";
import LoadingOverlay from "../../components/Loadingoverlay";
import SearchBar from '../../components/SearchBar'
import WeatherCard from '../../components/WeatherCard'
import HourlyForecast from '../../components/HourlyForecast'
import WeeklyForecast from '../../components/WeeklyForecast'
import { useEffect, useState } from 'react'

export default function Home() {

    const [city, setcity] = useState("");
    const [weathercity, setweathercity] = useState("");
    const [hour, sethour] = useState([]);
    const [day, setday] = useState([]);
    const [loading, setloading] = useState(false);
    const [weather, setweather] = useState({
        temp: null,
        apparentTemp: null,
        condition: null,
        wind: null,
        humidity: null,
        uv: null,
    })

    const hasData = weather.temp !== null;
    return (
        <main className="min-h-screen flex justify-center items-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8">
            <div className="w-full max-w-6xl mx-auto space-y-8">
                <div className={`${hour[1] && "hidden"} text-center mb-8`}>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Weather</h1>
                    <p className="text-slate-400">Get real-time weather updates for any city</p>
                </div>

                <SearchBar city={city} setcity={setcity} setweather={setweather} setweathercity={setweathercity} sethour={sethour} hour={hour} setday={setday} setloading={setloading} />
                <LoadingOverlay hasData={hasData} loading={loading}>
                    <AnimatePresence>
                        {weather.temp !== null && (
                            <motion.div
                                key="weather"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <WeatherCard weather={weather} weathercity={weathercity} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </LoadingOverlay>
                <LoadingOverlay hasData={hasData} loading={loading}>

                    <AnimatePresence>
                        {hour.length > 0 && (
                            <motion.div
                                key="hourly"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <HourlyForecast hour={hour} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </LoadingOverlay>
                <LoadingOverlay hasData={hasData} loading={loading}>

                    <AnimatePresence>
                        {day.length > 0 && (
                            <motion.div
                                key="weekly"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <WeeklyForecast day={day} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </LoadingOverlay>
            </div>
        </main>
    )
}
