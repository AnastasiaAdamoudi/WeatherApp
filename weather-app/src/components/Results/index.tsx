import { useState, useEffect } from "react";

export default function Results({ cityName }: any) {
  //get data for london from api.openweathermap.org
  const [weatherNow, setWeatherNow] = useState<object>({});

  useEffect(() => {
    async function getWeather(cityName: string) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=68102d64e560bd2680f7ef8afcd13886`
      );
      const data = await response.json();
      console.log(data);
      //   setWeatherNow(getWeather(data));
      setWeatherNow(data);
      return weatherNow;

      //get date from data
      const date = new Date(data.dt * 1000);
      console.log("date", date);
    }
    getWeather(cityName);
  }, [cityName]);

  return <div className="Results">results goes here</div>;
}
