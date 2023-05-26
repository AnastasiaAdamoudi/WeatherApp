import { useState } from "react";

export default function SearchBar({ setCityName, cityName }: any) {
  // const [cityName, setCityName] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCityName(event.target.value);
    console.log(cityName);
  }

  function handleSearch() {
    // add functionality to search for city weather on click
  }

  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </div>
  );
}
