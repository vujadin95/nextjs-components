"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function LeafletMap() {
  const kragujevac = { lat: 43.999003, long: 20.932857 };
  const krusevac = { lat: 43.631262, long: 21.279822 };
  const kgIcon: Icon = new Icon({
    iconUrl: "/dark-logo.png",
    iconSize: [25, 25],
    iconAnchor: [12, 41],
  });
  const ksIcon: Icon = new Icon({
    iconUrl: "/dark-logo.png",
    iconSize: [25, 25],
    iconAnchor: [12, 41],
  });
  // 43.999003;
  return (
    <MapContainer
      className="h-full w-full rounded-lg"
      center={[kragujevac.lat, kragujevac.long]}
      zoom={7}
      scrollWheelZoom={false}
      zoomAnimation={true}
      style={{ zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[kragujevac.lat, kragujevac.long]} icon={kgIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[krusevac.lat, krusevac.long]} icon={ksIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
