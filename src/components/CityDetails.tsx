import { useEffect, useState } from "react";
import {
  WiCloud,
  WiDaySunny,
  WiDayCloudy,
  WiDayFog,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiDaySnow,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { useParams } from "react-router-dom";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    id: number;
    description: string;
  }[];
}

interface Params {
  cityName: string;
  [key: string]: string | undefined;
}

export default function CityDetails() {
  const { cityName } = useParams<Params>();
  const [details, setDetails] = useState<WeatherData | null>(null);

  function renderWeatherIcon(weatherId: number) {
    const iconSize = 48;
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return <WiDayThunderstorm size={iconSize} className="text-blue-500" />;
      case weatherId >= 300 && weatherId < 400:
        return <WiDayShowers size={iconSize} className="text-blue-500" />;
      case weatherId >= 500 && weatherId < 600:
        return <WiDayRain size={iconSize} className="text-blue-500" />;
      case weatherId >= 600 && weatherId < 700:
        return <WiDaySnow size={iconSize} className="text-blue-500" />;
      case weatherId >= 700 && weatherId < 800:
        return <WiDayFog size={iconSize} className="text-blue-500" />;
      case weatherId === 800:
        return <WiDaySunny size={iconSize} className="text-blue-500" />;
      case weatherId === 801:
        return <WiDayCloudy size={iconSize} className="text-blue-500" />;
      default:
        return <WiCloud size={iconSize} className="text-blue-500" />;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (!cityName) return;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            cityName
          )}&appid=c5c42dd3f124e401c56a4a19aaaedbe1`
        );
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        console.log("Error fetching data :", err);
      }
    }

    fetchData();
  }, [cityName]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-200 h-[100vh]">
      <div className="container mx-auto">
        <div className="flex justify-center ">
          <div className="text-3xl">{details.name}</div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mx-10">
          <div className="text-7xl">
            {details.main && Math.round(details.main.temp - 273.15)}°C
          </div>
          <div className="w-12 h-12">
            {details.weather && renderWeatherIcon(details.weather[0]?.id)}
          </div>
          <div className="text-2xl">
            {details.weather && details.weather[0]?.description}
          </div>
        </div>
        <div className="flex justify-between mx-24 my-6">
          <div className="flex flex-row">
            <div>
              <WiStrongWind className="mt-1" />
            </div>
            <div>{details.wind && details.wind.speed} m/s</div>
          </div>
          <div className="flex flex-row">
            <div>
              <WiHumidity className="mt-1" />
            </div>
            <div>{details.main && details.main.humidity}%</div>
          </div>
          <div className="flex flex-row">
            <div>
              <WiBarometer className="mt-1" />
            </div>
            <div>
              {details.main && Math.round(details.main.pressure * 0.750064)} mm
              Hg
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-24">
          <div className="flex flex-row">
            <div>
              <WiSunrise className="mt-1" />
            </div>
            <div>
              {details.main && Math.round(details.main.temp_max - 273.15)}°C
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <WiSunset className="mt-1" />
            </div>
            <div>
              {details.main && Math.round(details.main.temp_min - 273.15)}°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
