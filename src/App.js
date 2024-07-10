import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import YurtaHome from './menu/YurtaHome';
import Us from './menu/Us';
import Letter from './pages/Letter';
import Log from './pages/Log';
import Registration from './pages/Registration';
import './styles/Header.css';
import ImageGalleryLikes from './components/ImageGalleryLikes';
import Footer from './components/Footer';
import ImageGalleryWithText from './components/ImageGalleryWithText';
import TodayDeal from './components/TodayDeal';
import BannerLayout from './components/BannerLayout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Forum from './pages/Forum';
import Events from './pages/Events';
import IconNavbar from './components/IconNavbar';





function MainContent() {
  const location = useLocation();
  const showImageGallery = location.pathname === '/' || location.pathname === '/us';
  const showBannerLayout = location.pathname === '/';


  return (
    <>
      {/* Main Banner should only be shown on the homepage */}
      {showBannerLayout && <BannerLayout/>}
      <IconNavbar/>
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
       <Navbar/>
     
        <MainContent />
     
        <Footer />
      </div>
      
    </Router>

  
  );
}

export default App;
