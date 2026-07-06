import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
} from "lucide-react";


export const weatherMap = {
  0: { label: "Clear sky", Icon: Sun, color: "text-yellow-400" },

  1: { label: "Mainly clear", Icon: Sun, color: "text-yellow-300" },

  2: { label: "Partly cloudy", Icon: CloudSun, color: "text-yellow-200" },

  3: { label: "Overcast", Icon: Cloud, color: "text-gray-300" },

  45: { label: "Fog", Icon: CloudFog, color: "text-gray-400" },
  48: { label: "Fog", Icon: CloudFog, color: "text-gray-400" },

  51: { label: "Light drizzle", Icon: CloudRain, color: "text-gray-400" },
  53: { label: "Drizzle", Icon: CloudRain, color: "text-gray-500" },
  55: { label: "Heavy drizzle", Icon: CloudRain, color: "text-gray-600" },

  61: { label: "Rain", Icon: CloudRain, color: "text-gray-500" },
  63: { label: "Moderate rain", Icon: CloudRain, color: "text-gray-600" },
  65: { label: "Heavy rain", Icon: CloudRain, color: "text-gray-700" },

  71: { label: "Snow", Icon: Snowflake, color: "text-blue-200" },
  73: { label: "Snow", Icon: Snowflake, color: "text-blue-300" },
  75: { label: "Heavy snow", Icon: Snowflake, color: "text-blue-400" },

  80: { label: "Rain showers", Icon: CloudRain, color: "text-gray-500" },
  81: { label: "Rain showers", Icon: CloudRain, color: "text-gray-600" },
  82: { label: "Heavy rain showers", Icon: CloudRain, color: "text-gray-700" },

  95: { label: "Thunderstorm", Icon: CloudLightning, color: "text-purple-400" },
  96: { label: "Thunderstorm with hail", Icon: CloudLightning, color: "text-purple-500" },
  99: { label: "Severe thunderstorm", Icon: CloudLightning, color: "text-purple-600" },
};

export function getWeather(code) {
  return weatherMap[code] || {
    label: "Unknown",
    Icon: Cloud,
    color: "text-gray-400",
  };
}