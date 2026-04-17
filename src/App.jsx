import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Register from './pages/Register';
import Home from './pages/public/Home';
import SportsListing from './pages/public/SportsListing';
import VenueDetails from './pages/public/VenueDetails';
import AboutUs from './pages/public/AboutUs';
import Contact from './pages/public/Contact';

// Layouts
import PublicLayout from './components/public/PublicLayout';

function App() {
  return (
    <Routes>
      {/* Public Platform Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<SportsListing />} />
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication / Register */}
      <Route path="/login" element={<Register />} />
      <Route path="/register" element={<Register />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

