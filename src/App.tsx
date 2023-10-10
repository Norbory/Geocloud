import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar"
import { Dashboard } from "./routes";
import './App.css'

function App() {

  return (
    <div className="w-full flex-col overflow-x-hidden">
      <Sidebar/>
      <div>
        <Dashboard/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
