import {Sidebar} from "./components/sidebar"
import Pantalla from './Pantalla';
import './App.css'

function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <Pantalla/>
    </div>
  )
}

export default App
