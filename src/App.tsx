import {Sidebar} from "./components/sidebar"
// import Pantalla from './Pantalla';
import './App.css'
import Pantalla from "./Pantalla"

function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-1/4"><Pantalla/> </div>

     
      
    </div>
  )
}

export default App
