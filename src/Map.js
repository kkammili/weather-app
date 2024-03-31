import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from './images/marker-icon.svg'; // Path to your marker icon image
import L from 'leaflet'

const customIcon = L.icon({
  iconUrl:markerIcon,
  iconSize: [50, 50],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  // You can customize icon properties here
});

const Map = ({position}) => {
  // const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 }); // Default position

  return (
    <MapContainer center={position} zoom={13} style={{ height: '350px', width:"80vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
