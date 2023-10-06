import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las rutas
import {Device, Dashboard, Page404} from "./routes"

// import Soporte from './Soporte';
// import Settings from './Settings';
// import IniciarSesion from './IniciarSesion';
// import Logout from './Logout';

function Pantalla() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device" element={<Device />} />
        {/* <Route path="/soporte" element={<Soporte />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/logout" element={<Logout />} /> */}
        {/* Puedes agregar una ruta por defecto (página de inicio) */}
        <Route path="/" element={<Dashboard />} />
        {/* Agrega una ruta de "página no encontrada" si ninguna de las rutas coincide */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default Pantalla;
