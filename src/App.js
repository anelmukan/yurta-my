import './styles/Header.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import BannerLayout from './components/BannerLayout';
import Footer from './components/Footer';
import IconNavbar from './components/IconNavbar';
import ImageGalleryLikes from './components/ImageGalleryLikes';
import ImageGalleryWithText from './components/ImageGalleryWithText';
import Navbar from './components/Navbar';
import TodayDeal from './components/TodayDeal';
import Us from './menu/Us';
import YurtaHome from './menu/YurtaHome';
import Catalog from './pages/Catalog';
import Events from './pages/Events';
import Forum from './pages/Forum';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Log from './pages/Log';
import Registration from './pages/Registration';

function MainContent() {
  const location = useLocation();
  const showImageGallery = location.pathname === '/' || location.pathname === '/us';
  const showBannerLayout = location.pathname === '/';

  return (
    <>
      {/* Main Banner should only be shown on the homepage */}
      {showBannerLayout && <BannerLayout />}
      <IconNavbar />
      {/* Other components as per your existing logic */}
      {showImageGallery && <ImageGalleryWithText />}

      {showImageGallery && <ImageGalleryLikes />}
      {showImageGallery && <TodayDeal />}

      <Routes>
        <Route path="/" element={<YurtaHome />} />
        <Route path="/us" element={<Us />} />
        <Route path="/letter" element={<Letter />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <MainContent />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
