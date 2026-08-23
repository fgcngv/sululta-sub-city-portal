
"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Sululta, Oromia
const sulultaPosition: [number, number] = [9.185, 38.746];

const markerIcon = L.icon({
  iconUrl: "/images/map-marker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function SulultaMap() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-slate-200">
      <MapContainer
        center={sulultaPosition}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; Esri, Maxar, Earthstar Geographics'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        <Marker position={sulultaPosition} icon={markerIcon}>
          <Popup>
            <div className="text-center">
              <strong>Sululta Sub-City Administration</strong>
              <br />
              Sululta, Oromia, Ethiopia
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}