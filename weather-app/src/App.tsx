import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

import { useState } from "react";

function App() {

  const [cityName, setCityName] = useState("London");
  const [isForecast, setisForecast] = useState<boolean>(false);

  return (
    <div className="App">
      <SearchBar setCityName={setCityName} cityName={cityName} setisForecast={setisForecast} isForecast={isForecast} />
      <Results cityName={cityName} isForecast={isForecast}  />
    </div>
  );
}

export default App;
