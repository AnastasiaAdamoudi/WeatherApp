import { useState } from "react";

export default function SearchBar({ setCityName, cityName }: any) {
    const [cityNameText, setCityNameText] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCityNameText(event.target.value);
    

    console.log(cityName);
  }

  function handleSearch(event: React.FormEvent) {
    event.preventDefault(); 
    
    setCityName(cityNameText);
    setCityNameText("");

  }

  return (
    <div className="SearchBar">
        <form onSubmit={handleSearch} >
            <input value={cityNameText} type="text" placeholder="Search" onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    </div>
  );
}
