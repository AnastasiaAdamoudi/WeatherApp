import { useState, useEffect } from "react";

export default function Results({ cityName, isForecast }: any) {

  type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
    currentDate: Date;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    wind_speed: number;
    wind_deg: number;
  }
  const [weatherNow, setWeatherNow] = useState<Weather>();
  const [weatherForecast, setWeatherForecast] = useState<Weather[]>();

  useEffect(() => {
    async function getWeather(cityName: string) {
    if (isForecast) {
            // forecast call here
            console.log("forecast");
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=68102d64e560bd2680f7ef8afcd13886`
                );
                const data = await response.json();
                // console.log(data);
                let thisWeather: Weather[] = [];
                for (let i = 0; i < data.list.length; i=i+8) {
                    const element = data.list[i];
                    let weather: Weather = {
                        id: element.id,
                        main: element.weather[0].main,
                        description: element.weather[0].description,
                        icon: element.weather[0].icon,
                        currentDate: new Date(element.dt * 1000),
                        temp: element.main.temp,
                        feels_like: element.main.feels_like,
                        temp_min: element.main.temp_min,
                        temp_max: element.main.temp_max,
                        wind_speed: element.wind.speed,
                        wind_deg: element.wind.deg,
                    };
                    thisWeather.push(weather);
                }
                setWeatherForecast(thisWeather);
                console.log(thisWeather);

    } else {
        console.log("current");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=68102d64e560bd2680f7ef8afcd13886`
      );
      const data = await response.json();
    //   console.log(data.wind.speed);

       let thisWeather: Weather = {
         id: data.id,
         main: data.weather[0].main,
         description: data.weather[0].description,
         icon: data.weather[0].icon,
         currentDate: new Date(data.dt * 1000),
         temp: data.main.temp,
         feels_like: data.main.feels_like,
         temp_min: data.main.temp_min,
         temp_max: data.main.temp_max,
         wind_speed: data.wind.speed,
         wind_deg: data.wind.deg,
        };

        setWeatherNow(thisWeather);

        // console.log(thisWeather);
    }

    }
    getWeather(cityName);
  }, [cityName]);

  return <div className="Results">
    <h1>{cityName}</h1>
  {isForecast ? <div>

    {weatherForecast?.map((weather: Weather) => {
        return (
            <div key={weather.id}>
                <h2>{weather.currentDate.toLocaleDateString()}</h2>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
                <h2>{weather.main}</h2>
                <h4>Temperature: {weather.temp}°C</h4>
                <h4>Feels like: {weather.feels_like}°C</h4>
                <h4>Min temperature: {weather.temp_min}°C</h4>
                <h4>Max temperature: {weather.temp_max}°C</h4>
                <h4>Wind speed: {weather.wind_speed} km/h</h4>
                <h4>Wind direction: {weather.wind_deg}°</h4>
            </div>
        );
    })}

  </div> : 
  
    <div>
        <h2>{weatherNow?.currentDate.toLocaleDateString()}</h2> 
        <img src={`http://openweathermap.org/img/w/${weatherNow?.icon}.png`} alt="weather icon" />
        <h2>{weatherNow?.main}</h2>
        <h4>Temperature: {weatherNow?.temp}°C</h4>
        <h4>Feels like: {weatherNow?.feels_like}°C</h4>
        <h4>Min temperature: {weatherNow?.temp_min}°C</h4>
        <h4>Max temperature: {weatherNow?.temp_max}°C</h4>
        <h4>Wind speed: {weatherNow?.wind_speed} km/h</h4>
        <h4>Wind direction: {weatherNow?.wind_deg}°</h4>
            
    </div>}    




    {/* <img src={`http://openweathermap.org/img/w/${weatherNow?.icon}.png`} alt="weather icon" />
    <h2>{weatherNow?.main}</h2>
    <h4>Temperature: {weatherNow?.temp}°C</h4>
    <h4>Feels like: {weatherNow?.feels_like}°C</h4>
    <h4>Min temperature: {weatherNow?.temp_min}°C</h4>
    <h4>Max temperature: {weatherNow?.temp_max}°C</h4>
    <h4>Wind speed: {weatherNow?.wind_speed} km/h</h4>
    <h4>Wind direction: {weatherNow?.wind_deg}°</h4> */}
  </div>;
}
