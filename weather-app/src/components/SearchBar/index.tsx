import { useState } from "react";

export default function SearchBar({ setCityName, cityName, setisForecast, isForecast }: any) {
    const [cityNameText, setCityNameText] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCityNameText(event.target.value);
  }

  function handleSearch(event: React.FormEvent) {
    event.preventDefault(); 
    setCityName(cityNameText);
    setCityNameText("");
  }

  function handleForecast(event: React.ChangeEvent<HTMLInputElement>) {
    setisForecast(event.target.checked);
  }

  return (
    <div className="SearchBar">
        <form onSubmit={handleSearch} >
            <input value={cityNameText} type="text" placeholder="Search" onChange={handleInputChange} />
            <button type="submit">Enter city name</button>
            <br></br>
            <label htmlFor="forecast">Forecast</label>
            <input type="checkbox" name="forecast" id="forecast" onChange={handleForecast} />
        </form>
    </div>
  );
}
