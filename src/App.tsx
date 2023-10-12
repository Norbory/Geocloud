<<<<<<< HEAD
import {Sidebar} from "./components/sidebar"
// import Pantalla from './Pantalla';
=======
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar"
import { Dashboard } from "./routes";
>>>>>>> 94209ca181989b9e54c975c7a089d3ecdca9d589
import './App.css'
import Pantalla from "./Pantalla"

function App() {

  return (
    <div className="w-full flex-col overflow-x-hidden">
      <Sidebar/>
<<<<<<< HEAD
      <div className="w-1/4"><Pantalla/> </div>

     
      
=======
      <div>
        <Dashboard/>
        <Outlet/>
      </div>
>>>>>>> 94209ca181989b9e54c975c7a089d3ecdca9d589
    </div>
  )
}

export default App
