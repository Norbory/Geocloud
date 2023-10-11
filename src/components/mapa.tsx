/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const apiKey  = import.meta.env.API_KEY;


export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey  || "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap 
      zoom={10} 
      center={center} 
      mapContainerStyle={{ 
        width: '80vw', 
        height: '300px',
        backgroundColor: 'lightgray',
        border: '1px solid black',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}