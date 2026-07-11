'use client'

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWeather } from "../lib/weather";

export default function WeeklyForecast({ day }) {
  const [visibleCards, setVisibleCards] = useState(7);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(5);
      } else {
        setVisibleCards(7);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () =>
      window.removeEventListener("resize", updateVisibleCards);
  }, []);


  useEffect(() => {
    if (start > day.length - visibleCards) {
      setStart(Math.max(0, day.length - visibleCards));
    }
  }, [visibleCards, day, start]);


  if (!day?.length) return null;


  const canGoLeft = start > 0;
  const canGoRight = start + visibleCards < day.length;


  return (
    <div className="rounded-3xl border border-slate-700/30 transition-all duration-300 ease-out hover:scale-102 bg-linear-to-br from-slate-800/50 to-slate-900/50 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8">


      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <h3 className="text-lg pl-2 font-bold text-white sm:text-xl md:text-2xl">
          7 Day Forecast
        </h3>


        <div className="flex gap-2">

          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canGoLeft}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10
              ${
                canGoLeft
                  ? "border-slate-600 bg-slate-700/30 hover:scale-105 hover:bg-slate-600/50"
                  : "cursor-not-allowed border-slate-800 bg-slate-800/20 opacity-40"
              }`}
          >
            <ChevronLeft className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </button>


          <button
            onClick={() =>
              setStart((s) =>
                Math.min(day.length - visibleCards, s + 1)
              )
            }
            disabled={!canGoRight}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10
              ${
                canGoRight
                  ? "border-slate-600 bg-slate-700/30 hover:scale-105 hover:bg-slate-600/50"
                  : "cursor-not-allowed border-slate-800 bg-slate-800/20 opacity-40"
              }`}
          >
            <ChevronRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </button>

        </div>

      </div>



      {/* Forecast Carousel */}
      <div className="relative overflow-hidden">


        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${start * (100 / visibleCards)}%)`,
          }}
        >

          {day.map((item, index) => {

            const Weather = getWeather(item.condition);
            const Icon = Weather.Icon;

            const isCurrent = index === start;


            return (
              <div
                key={index}
                className={`
                  min-w-30
                  sm:min-w-[calc(20%-0.75rem)]
                  lg:min-w-[calc(14.28%-0.75rem)]

                  rounded-2xl border px-3 py-4
                  transition-all duration-300

                  ${
                    isCurrent
                      ? "border-cyan-400/40 bg-linear-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10"
                      : "border-slate-700/40 bg-slate-700/20 hover:border-slate-500/50 hover:bg-slate-700/40"
                  }
                `}
              >

                <div className="flex flex-col items-center">


                  <p className="text-xs font-semibold text-white">
                    {item.day}
                  </p>


                  <p className="mb-3 text-[10px] text-slate-400">
                    {item.date}
                  </p>


                  <Icon
                    className={`mb-3 h-7 w-7 sm:h-8 sm:w-8 ${Weather.color}`}
                  />


                  <div className="space-y-1 text-center">

                    <p className="text-sm font-bold text-white sm:text-base">
                      {item.max_temp}°
                    </p>

                    <p className="text-xs text-slate-400">
                      {item.min_temp}°
                    </p>

                  </div>


                </div>

              </div>
            );
          })}


        </div>



        {/* Edge hints */}
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