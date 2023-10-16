import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './style.css'

export default function Map() {
  return (
    <div>
      <MapContainer  className="map" center={[-34.603606409383076, -58.38159186023152]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker className="marker" position={[-34.603606409383076, -58.38159186023152]}>
          <Popup>
            Casita
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
