// /* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import { NavLink } from "react-router-dom";

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
      height: '100%',
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
          <NavLink to="/device" className="flex">
            <div>
              <h1 className="text-left text-xl font-bold text-black">{marcador.content}</h1>
              <div className="flex text-black">
                {(marcador.status !== "Seco") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em" 
                    viewBox="0 0 384 512"
                    className="w-4 h-4 text-black"
                  >
                    <path 
                    d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                    />
                  </svg>
                ): <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="1em" 
                      viewBox="0 0 640 512"
                    >
                    <path 
                    d="M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192zM505.2 370.7c4.4-16.1 6.8-33.1 6.8-50.7c0-91.2-130.2-262.3-166.6-308.3C339.4 4.2 330.5 0 320.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L505.2 370.7zM224 336c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                    />
                  </svg>}
                <p className="ml-1 text-black">{marcador.status}</p>
              </div>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-black text-left">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                <p className="text-black">Nivel Freatico: {marcador.altura}</p>
              </div>
              <div className="flex">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="1em"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-black"
                >
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                </svg>
              {(marcador.altura < 15) && (marcador.altura > 10) ? (
                <p className="ml-1 text-yellow-300">Alerta Amarilla</p>
              ) :(marcador.altura < 10) && (marcador.altura > 5) ? (
                <p className="ml-1 text-amber-600">Alerta Naranja</p>
              ) : marcador.altura < 5 ? (
                <p className="ml-1 text-red-600">Alerta Roja</p>
              ) : <p> Normal</p>}
              </div>
            </div>
            <div className="ml-2 rounded-lg">
              <img src="https://geomecanicalatina.com/wp-content/uploads/2021/03/automatizacion-monitoreo-inclinometrico-piezometrico-comunicacion-satelital-proyecto-pluspetrol-portada-02-225x300.jpg" alt="Foto de operacionesen zona" style={{maxWidth:"150px"}}/>
            </div>
          </NavLink>
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
