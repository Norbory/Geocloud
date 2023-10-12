<<<<<<< HEAD
import { BrowserRouter , Route, Routes } from 'react-router-dom';
=======
import { Route,  Routes } from "react-router";
>>>>>>> 94209ca181989b9e54c975c7a089d3ecdca9d589
import {Device, Dashboard, Page404} from "./routes"

function Pantalla() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Device />} />
        
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
=======
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/device" element={<Device />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
>>>>>>> 94209ca181989b9e54c975c7a089d3ecdca9d589
  );
}
export default Pantalla;
