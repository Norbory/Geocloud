// /* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";

export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBlEk4rl5AjRxTwpxATJYtOwUGO8ijioO4",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: -10.610161608534995, lng: -76.21018744408451 }), []);
  const [marcador, setMarcador] = useState<{ position: { lat: number; lng: number }; content: string } | null>(null);

  const markers = [
    { position: center, content: "Piezometro 101" , status: "Humedo", altura: 12 },
    { position: { lat: -10.53, lng: -76.23 }, content: "Piezometro 102" , status: "Seco" , altura: 9},
    { position: { lat: -10.62, lng: -76.24 }, content: "Piezometro 103" , status: "Seco" , altura: 4},
  ];

  return (
    <GoogleMap 
      zoom={10} 
      center={center} 
      mapContainerStyle={{ 
        width: '100%', 
        height: '400px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => setMarcador(marker)}
        />
      ))}

      {marcador && (
        <InfoWindow
          position={marcador.position}
          onCloseClick={() => setMarcador(null)}
        >
          <div>
            <h1>{marcador.content}</h1>
            <p>Estado: {marcador.status}</p>
            <p>Nivel Freatico: {marcador.altura}</p>
            {(marcador.altura < 10) && (marcador.altura > 5) ? (
              <p style={{ color: 'orange' }}>Alerta Naranja</p>
            ) : marcador.altura < 5 ? (
              <p style={{ color: 'red' }}>Alerta Roja</p>
            ) : <p> Normal</p>}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

// import { useState, useRef, useEffect } from "react";
// import { Wrapper } from "@googlemaps/react-wrapper";
// const apiKey = import.meta.env.VITE_MAP_API_KEY;
// const mapId = import.meta.env.MAP_ID;
// import {
//   PerspectiveCamera,
//   Scene,
//   AmbientLight,
//   WebGLRenderer,
//   Matrix4,
//   Object3D,
//   Object3DEventMap,
//   Camera,
// } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const mapOptions = {
//   mapId: mapId,
//   center: { lat: 43.661036, lng: -79.391277 },
//   zoom: 17,
//   disableDefaultUI: true,
//   heading: 25,
//   tilt: 25,
// };

// export default function Mapa() {
//   return (
//     <Wrapper apiKey={apiKey || ""}>
//       <MyMap />
//     </Wrapper>
//   );
// }

// function MyMap() {
//   const overlayRef = useRef<google.maps.WebGLOverlayView | undefined>(undefined);
//   const [_map, setMap] = useState<google.maps.Map | null>(null);
//   const ref = useRef<HTMLDivElement | null>(null); 

//   useEffect(() => {
//     if (ref.current && !overlayRef.current) {
//       const instance = new window.google.maps.Map(ref.current, mapOptions);
//       setMap(instance);
//       overlayRef.current = createOverlay(instance);
//     }
//   }, []);

//   return <div ref={ref} id="map"/>;
// }

// function createOverlay(map: google.maps.Map | null | undefined) {
//   if (!map) {
    
//     return;
//   }

//   const overlay = new google.maps.WebGLOverlayView();
//   let renderer: WebGLRenderer, scene: Object3D<Object3DEventMap>, camera: Camera, loader: GLTFLoader;

//   overlay.onAdd = () => {
//     scene = new Scene();
//     camera = new PerspectiveCamera();
//     const light = new AmbientLight(0xffffff, 0.9);
//     scene.add(light);

//     loader = new GLTFLoader();
//     loader.loadAsync("/low_poly_scooter/scene.gltf").then((object) => {
//       const group = object.scene;
//       group.scale.setScalar(25);
//       group.rotation.set(Math.PI / 2, 0, 0);
//       group.position.setZ(-120);
//       scene.add(group);
//     });
//   };

//   overlay.onContextRestored = ({ gl }) => {
//     renderer = new WebGLRenderer({
//       canvas: gl.canvas,
//       context: gl,
//       ...gl.getContextAttributes(),
//     });
//     renderer.autoClear = false;

//     loader.manager.onLoad = () => {
//       renderer.setAnimationLoop(() => {
//         map.moveCamera({
//           tilt: mapOptions.tilt,
//           heading: mapOptions.heading,
//           zoom: mapOptions.zoom,
//         });

//         if (mapOptions.tilt < 60) {
//           mapOptions.tilt += 0.5;
//         } else if (mapOptions.zoom < 20) {
//           mapOptions.zoom += 0.05;
//         } else if (mapOptions.heading < 125) {
//           mapOptions.heading += 0.5;
//         } else {
//           renderer.setAnimationLoop(null);
//         }
//       });
//     };
//   };

//   overlay.onDraw = ({ transformer }) => {
//     const matrix = transformer.fromLatLngAltitude({
//       lat: mapOptions.center.lat,
//       lng: mapOptions.center.lng,
//       altitude: 120,
//     });
//     camera.projectionMatrix = new Matrix4().fromArray(matrix);

//     overlay.requestRedraw();
//     renderer.render(scene, camera);
//     renderer.resetState();
//   };

//   overlay.setMap(map);

//   return overlay;
// }
