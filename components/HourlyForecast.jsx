'use client'

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWeather } from "../lib/weather";

export default function HourlyForecast({ hour }) {
  const [visibleCards, setVisibleCards] = useState(6);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(4);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(5);
      } else {
        setVisibleCards(6);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () =>
      window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (start > hour.length - visibleCards) {
      setStart(Math.max(0, hour.length - visibleCards));
    }
  }, [visibleCards, hour, start]);

  if (!hour?.length) return null;

  const canGoLeft = start > 0;
  const canGoRight = start + visibleCards < hour.length;

  return (
    <div className="rounded-3xl border transition-all duration-300 ease-out hover:scale-102 border-slate-700/30 bg-linear-to-br from-slate-800/50 to-slate-900/50 p-5 shadow-2xl backdrop-blur-md sm:p-6 md:p-8">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white md:text-2xl">
          Hourly Forecast
        </h3>

        <div className="flex gap-2">

          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canGoLeft}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300
              ${
                canGoLeft
                  ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/50 hover:scale-105"
                  : "cursor-not-allowed border-slate-800 bg-slate-800/20 opacity-40"
              }`}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>


          <button
            onClick={() =>
              setStart((s) =>
                Math.min(hour.length - visibleCards, s + 1)
              )
            }
            disabled={!canGoRight}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300
              ${
                canGoRight
                  ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/50 hover:scale-105"
                  : "cursor-not-allowed border-slate-800 bg-slate-800/20 opacity-40"
              }`}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

        </div>
      </div>


      {/* Peek Carousel */}
      <div className="relative overflow-hidden">

        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${start * (100 / visibleCards)}%)`,
          }}
        >

          {hour.map((item, index) => {
            const Weather = getWeather(item.condition);
            const Icon = Weather.Icon;

            const isCurrent = index === start;

            return (
              <div
                key={index}
                className={`
                  max-w-10
                  min-w-25
                  sm:min-w-30
                  lg:min-w-37.5
                  rounded-2xl border p-4
                  transition-all duration-300

                  ${
                    isCurrent
                      ? "border-cyan-400/40 bg-linear-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10"
                      : "border-slate-700/40 bg-slate-700/20 hover:border-slate-500/50 hover:bg-slate-700/40"
                  }
                `}
              >

                <div className="flex flex-col items-center">

                  <span className="text-xs font-medium text-slate-300">
                    {item.time}
                  </span>

                  <Icon
                    className={`my-4 h-8 w-8 ${Weather.color}`}
                  />

                  <span className="text-xl font-bold text-white">
                    {item.temp}°
                  </span>

                </div>

              </div>
            );
          })}

        </div>


        {/* Peek fade indicators */}
        {canGoLeft && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-linear-to-r from-slate-900/80 to-transparent" />
        )}

        {canGoRight && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-linear-to-l from-slate-900/80 to-transparent" />
        )}

      </div>

    </div>
  );
}