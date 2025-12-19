import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';
// import Navbar from './components/Navbar'; // Will create later
// import Footer from './components/Footer'; // Will create later

function App() {
    return (
        <div className="App">
            {/* Navbar could go here if global, but maybe different for Admin */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin/*" element={<AdminPanel />} />
            </Routes>
        </div>
    );
}

export default App;
