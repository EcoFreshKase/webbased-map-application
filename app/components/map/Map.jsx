"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div className="map-container">
      <MapContainer center={[51.0, 9.0]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href:"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
