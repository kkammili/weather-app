// WeatherDisplay.js
import React from "react";

function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <div className="weather-info">
        <h2>Weather in {weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        {/* <div style={{display:'inline-flex'}} className="weather-icon">
          <img src={weatherIcon} alt="Weather Icon" />
        </div> */}
        <p>Humidity: {weatherData.main.humidity}%</p>
        {/* Add more weather information as needed */}
      </div>
    </div>
  );
}

export default WeatherDisplay;
