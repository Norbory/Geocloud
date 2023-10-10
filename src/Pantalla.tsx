import { Route,  Routes } from "react-router";
import {Device, Dashboard, Page404} from "./routes"

function Pantalla() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/device" element={<Device />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
export default Pantalla;
