import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine"; // Import Leaflet Routing Machine
import L from "leaflet";
import locations from "./locations";

// Import sport icons
import athleticsIcon from "./freebie-olympic-sports-icons/SVG/athletics.svg";
import artisticGymnasticsIcon from "./freebie-olympic-sports-icons/SVG/artistic_gymnastics.svg";
import beachVolleyballIcon from "./freebie-olympic-sports-icons/SVG/beach_volleyball.svg";
import swimmingIcon from "./freebie-olympic-sports-icons/SVG/swimming.svg";
import boxingIcon from "./freebie-olympic-sports-icons/SVG/boxing.svg";
import wrestlingIcon from "./freebie-olympic-sports-icons/SVG/wrestling.svg";
import tennisIcon from "./freebie-olympic-sports-icons/SVG/tennis.svg";
import volleyballIcon from "./freebie-olympic-sports-icons/SVG/volleyball.svg";
import rugbyIcon from "./freebie-olympic-sports-icons/SVG/rugby_sevens.svg";
import weightliftingIcon from "./freebie-olympic-sports-icons/SVG/weightlifting.svg";

// Function to create an icon with dynamic size
const createIcon = (iconUrl, zoom) => {
  const size = Math.max(32, zoom * 4);
  return new L.Icon({
    iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

// Component to handle zoom changes
function ZoomHandler({ setZoom }) {
  const map = useMap();

  useEffect(() => {
    map.on("zoomend", () => {
      setZoom(map.getZoom());
    });
  }, [map, setZoom]);

  return null;
}

// Component for Routing Control
function RoutingControl({ routePoints }) {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: routePoints.map((point) => L.latLng(point[0], point[1])),
      routeWhileDragging: true,
      createMarker: () => null, // Disable default markers
      show: false, // Disable default instructions
      lineOptions: {
        styles: [{ color: "blue", weight: 5 }], // Customize the route line
      },
    }).addTo(map);

    return () => {
      if (map.hasLayer(routingControl)) {
        map.removeControl(routingControl); // Safely remove the routing control
      }
    };
  }, [map, routePoints]);

  return null;
}

function Map() {
  const center = [34.0522, -118.2437];
  const [currentZoom, setCurrentZoom] = useState(10);

  // Define Southern California bounds
  const southWest = L.latLng(33.4, -119.2);
  const northEast = L.latLng(34.8, -117.0);
  const bounds = L.latLngBounds(southWest, northEast);

  // Dynamic icons object that updates with zoom
  const dynamicIcons = {
    athletics: createIcon(athleticsIcon, currentZoom),
    artistic_gymnastics: createIcon(artisticGymnasticsIcon, currentZoom),
    beach_volleyball: createIcon(beachVolleyballIcon, currentZoom),
    swimming: createIcon(swimmingIcon, currentZoom),
    boxing: createIcon(boxingIcon, currentZoom),
    wrestling: createIcon(wrestlingIcon, currentZoom),
    tennis: createIcon(tennisIcon, currentZoom),
    volleyball: createIcon(volleyballIcon, currentZoom),
    rugby_sevens: createIcon(rugbyIcon, currentZoom),
    weightlifting: createIcon(weightliftingIcon, currentZoom),
  };

  // Example route points (customize based on your locations)
  const routePoints = locations.map((location) => location.position);

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
      zoomAnimation={true}
      minZoom={9}
      maxZoom={18}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        bounds={bounds}
      />
      <ZoomHandler setZoom={setCurrentZoom} />
      <RoutingControl routePoints={routePoints} />
      {locations.map((location, idx) => (
        <Marker
          key={idx}
          position={location.position}
          icon={dynamicIcons[location.type] || dynamicIcons.athletics}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;