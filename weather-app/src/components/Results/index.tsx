import { useState, useEffect } from "react";

export default function Results({ cityName }: any) {

  type Weather = {
    id: number;
    main: string;
    description: string;

    icon: string;
    date: Date;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    wind_speed: number;
    wind_deg: number;
  }
  const [weatherNow, setWeatherNow] = useState<Weather>();


  useEffect(() => {
    async function getWeather(cityName: string) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=68102d64e560bd2680f7ef8afcd13886`
      );
      const data = await response.json();
      console.log(data.wind.speed);

       let thisWeather: Weather = {
         id: data.id,
         main: data.weather[0].main,
         description: data.weather[0].description,
        icon: data.weather[0].icon,
        date: new Date(data.dt * 1000),
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        };

      //setWeatherNow(data);

     console.log(thisWeather);

    }
    getWeather(cityName);
  }, [cityName]);

  return <div className="Results">
    <h1>
        {weatherNow?.main}
    </h1>

  </div>;
}
