import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/sidebar';
import { Dashboard, Device, Page404 } from './routes';

export default function App() {
  return (
    <Router>
      <div className='flex overflow-x-hidden' style={{width:"100vw", height:"100vh"}}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/device" element={<Device />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

