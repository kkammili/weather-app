// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./SearchBar";
import rainy from "./images/rainy.jpg";
import sunny from "./images/sunny.jpg";
import cloudy from "./images/cloudy.jpg";
import haze from './images/haze.jpg'
import def from "./images/def.jpg";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [bgImg, setBgImg] = useState(`url(${def})`);

  useEffect(() => {
    if (bgImg) {
      // Set background image based on weather data
      const body = document.body;
      console.log(bgImg);
      body.style.backgroundImage = bgImg;
      body.style.backgroundSize = "cover"
      body.style.backgroundPosition = "center"
      body.style.backgroundAttachment = "fixed"
    }
  }, [bgImg]);

  function setBackgroundImage(weatherDescription) {
    let imageUrl;
    // Set background image based on weather description
    if (weatherDescription.includes("rain")) {
      imageUrl = rainy; // Path to rainy background image
    } else if (weatherDescription.includes("cloud")) {
      imageUrl = cloudy; // Path to cloudy background image
    } else if (weatherDescription.includes("clear") || weatherDescription.includes("sun")) {
      imageUrl = sunny; // Path to sunny background image
    } else {
      imageUrl = haze;
    }
  
    setBgImg(`url(${imageUrl})`); // Set as background image URL
  }

  const fetchWeatherData = async (city) => {
    const apiKey = "3b047c3f2e86da41ef865d18feb7e891";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data, '<---- check data')
      if(!(data.message && data.cod)){
        setWeatherData(data);
        setBackgroundImage(data.weather[0].description);
      }else{
        alert("City Not Found")
      }
  
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  return (
    <div className={bgImg ? "container-bgimg" : "container"}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Weather App</h1>
      <SearchBar fetchWeatherData={fetchWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
