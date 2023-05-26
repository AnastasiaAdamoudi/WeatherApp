import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("London");

  return (
    <div className="App">
      <SearchBar setCityName={setCityName} cityName={cityName} />
      <Results cityName={cityName} />
      {/* <SearchBar /> */}
      {/* <Results cityName={cityName} /> */}
    </div>
  );
}

export default App;
