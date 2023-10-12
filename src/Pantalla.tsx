import { BrowserRouter , Route, Routes } from 'react-router-dom';
import {Device, Dashboard, Page404} from "./routes"

function Pantalla() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Device />} />
        
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pantalla;
