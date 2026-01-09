import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Sigiriya from './pages/Sigiriya';
import NineArchBridge from './pages/NineArchBridge';
import ArugamBay from './pages/ArugamBay';
import TempleOfTooth from './pages/TempleOfTooth';
import BomburuElla from './pages/BomburuElla';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/sigiriya" element={<Sigiriya />} />
            <Route path="/destinations/nine-arch-bridge" element={<NineArchBridge />} />
            <Route path="/destinations/arugam-bay" element={<ArugamBay />} />
            <Route path="/destinations/temple-of-tooth" element={<TempleOfTooth />} />
            <Route path="/destinations/bomburu-ella" element={<BomburuElla />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
