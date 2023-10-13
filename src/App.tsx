import {Sidebar} from "./components/sidebar"
// import Pantalla from './Pantalla';
import './App.css'
import Pantalla from "./Pantalla"

function App() {

  return (
    <div className="w-full flex-col overflow-x-hidden">
      <Sidebar/>
      <Pantalla/>
    </div>
  )
}

export default App
