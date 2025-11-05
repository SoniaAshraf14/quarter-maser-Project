"use client"; // if using Next 13 app directory

import { GoogleMap, LoadScript, Polyline, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Example coordinates
const origin = { lat: 37.7749, lng: -122.4194 }; // San Francisco
const destination = { lat: 34.0522, lng: -118.2437 }; // Los Angeles

const pathCoordinates = [origin, destination];

export default function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origin}
        zoom={10}
      >
        {/* Markers */}
        <Marker position={origin} />
        <Marker position={destination} />

        {/* Polyline */}
        <Polyline
          path={pathCoordinates}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 4,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}
