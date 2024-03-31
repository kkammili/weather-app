import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const FitBounds = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    const cityCenter = [position.lat, position.lon]; // Replace latitude and longitude with the coordinates of the city center
    const distance = 0.1; // Define the distance (in degrees) to extend the bounding box

    // Calculate bounds of the city
    const cityBounds = [
      [cityCenter[0] - distance, cityCenter[1] - distance], // Southwest corner
      [cityCenter[0] + distance, cityCenter[1] + distance], // Northeast corner
    ];
    if (map) {
      map.fitBounds(cityBounds);
    }
  }, [map, position]);

  return null;
};

export default FitBounds;
