import React, { useState, useEffect } from 'react';

const CityTime = ({ cityName, coords }) => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const getCurrentLocalTime = async () => {
      try {
        // Step 1: Obtain Geographic Coordinates
        // const coordinates = await getCityCoordinates(cityName);

        // Step 2: Determine Timezone
        console.log(coords, cityName, '<------ coords')
        const timezone = await getTimezone(coords);

        // Step 3: Get Current Time
        const time = getCurrentTime(timezone);

        setCurrentTime(time);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCurrentLocalTime();
  }, [coords, cityName]);

  const getTimezone = async ({ lat, "lon":lng }) => {
    const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=8KWOPLRCIDMI&format=json&by=position&lat=${lat}&lng=${lng}`);
    const data = await response.json();
    return data.zoneName;
  };

  const getCurrentTime = (timezone) => {
    const date = new Date();
    const options = { timeZone: timezone, hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div>
      <p>Time: {currentTime}</p>
    </div>
  );
};

export default CityTime;

