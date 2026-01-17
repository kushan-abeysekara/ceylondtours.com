import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Sigiriya from './pages/Places/Sigiriya';
import NineArchBridge from './pages/Places/NineArchBridge';
import ArugamBay from './pages/Places/ArugamBay';
import TempleOfTooth from './pages/Places/TempleOfTooth';
import BomburuElla from './pages/Places/BomburuElla';
import Ella from './pages/Places/Ella';
import Kandy from './pages/Places/Kandy';
import NuwaraEliya from './pages/Places/NuwaraEliya';
import GalleFort from './pages/Places/GalleFort';
import YalaNationalPark from './pages/Places/YalaNationalPark';
import Mirissa from './pages/Places/Mirissa';
import Bentota from './pages/Places/Bentota';
import Anuradhapura from './pages/Places/Anuradhapura';
import Polonnaruwa from './pages/Places/Polonnaruwa';
import DambullaCaveTemple from './pages/Places/DambullaCaveTemple';
import HortonPlains from './pages/Places/HortonPlains';
import AdamsPeak from './pages/Places/AdamsPeak';
import Trincomalee from './pages/Places/Trincomalee';
import Hikkaduwa from './pages/Places/Hikkaduwa';
import UdawalaweNationalPark from './pages/Places/UdawalaweNationalPark';
import Kalpitiya from './pages/Places/Kalpitiya';
import Jaffna from './pages/Places/Jaffna';
import KnucklesMountainRange from './pages/Places/KnucklesMountainRange';
import Kitulgala from './pages/Places/Kitulgala';
import Pasikuda from './pages/Places/Pasikuda';
import Negombo from './pages/Places/Negombo';
import Mahiyanganaya from './pages/Places/Mahiyanganaya';
import RavanaFalls from './pages/Places/RavanaFalls';
import PidurangalaRock from './pages/Places/PidurangalaRock';
import SinharajaForest from './pages/Places/SinharajaForest';
import WilpattuNationalPark from './pages/Places/WilpattuNationalPark';
import Batticaloa from './pages/Places/Batticaloa';
import Badulla from './pages/Places/Badulla';
import Hatton from './pages/Places/Hatton';
import Matara from './pages/Places/Matara';
import Hambantota from './pages/Places/Hambantota';
import Kataragama from './pages/Places/Kataragama';
import Colombo from './pages/Places/Colombo';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
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
            <Route path="/destinations/ella" element={<Ella />} />
            <Route path="/destinations/kandy" element={<Kandy />} />
            <Route path="/destinations/nuwara-eliya" element={<NuwaraEliya />} />
            <Route path="/destinations/galle-fort" element={<GalleFort />} />
            <Route path="/destinations/yala-national-park" element={<YalaNationalPark />} />
            <Route path="/destinations/mirissa" element={<Mirissa />} />
            <Route path="/destinations/bentota" element={<Bentota />} />
            <Route path="/destinations/anuradhapura" element={<Anuradhapura />} />
            <Route path="/destinations/polonnaruwa" element={<Polonnaruwa />} />
            <Route path="/destinations/dambulla-cave-temple" element={<DambullaCaveTemple />} />
            <Route path="/destinations/horton-plains" element={<HortonPlains />} />
            <Route path="/destinations/adams-peak" element={<AdamsPeak />} />
            <Route path="/destinations/trincomalee" element={<Trincomalee />} />
            <Route path="/destinations/hikkaduwa" element={<Hikkaduwa />} />
            <Route path="/destinations/udawalawe-national-park" element={<UdawalaweNationalPark />} />
            <Route path="/destinations/kalpitiya" element={<Kalpitiya />} />
            <Route path="/destinations/jaffna" element={<Jaffna />} />
            <Route path="/destinations/knuckles-mountain-range" element={<KnucklesMountainRange />} />
            <Route path="/destinations/kitulgala" element={<Kitulgala />} />
            <Route path="/destinations/pasikuda" element={<Pasikuda />} />
            <Route path="/destinations/negombo" element={<Negombo />} />
            <Route path="/destinations/mahiyanganaya" element={<Mahiyanganaya />} />
            <Route path="/destinations/ravana-falls" element={<RavanaFalls />} />
            <Route path="/destinations/pidurangala-rock" element={<PidurangalaRock />} />
            <Route path="/destinations/sinharaja-forest" element={<SinharajaForest />} />
            <Route path="/destinations/wilpattu-national-park" element={<WilpattuNationalPark />} />
            <Route path="/destinations/batticaloa" element={<Batticaloa />} />
            <Route path="/destinations/badulla" element={<Badulla />} />
            <Route path="/destinations/hatton" element={<Hatton />} />
            <Route path="/destinations/matara" element={<Matara />} />
            <Route path="/destinations/hambantota" element={<Hambantota />} />
            <Route path="/destinations/kataragama" element={<Kataragama />} />
            <Route path="/destinations/colombo" element={<Colombo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
