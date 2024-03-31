// SearchBar.js
import React, { useState } from "react";

function SearchBar({ fetchWeatherData }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
    setCity("");
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
