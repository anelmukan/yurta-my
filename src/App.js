import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import YurtaHome from './menu/YurtaHome';
import Design from './menu/Design';
import Letter from './pages/Letter';
import Log from './pages/Log';
import Registration from './pages/Registration';
import ImageGallery from './components/ImageGallery';
import './App.css';
import ImageGalleryLikes from './components/ImageGalleryLikes';
import Footer from './components/Footer';

function MainContent() {
  const location = useLocation();
  const showImageGallery = location.pathname === '/' || location.pathname === '/design';

  return (
    <>
      {showImageGallery && <ImageGallery />}
      {showImageGallery && <ImageGalleryLikes />}
      
      <Routes>
        <Route path="/" element={<YurtaHome />} />
        <Route path="/design" element={<Design />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/log" element={<Log />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className='home-head'>YurtaHome</Link>
          <Link to="/design" className='head'>Дизайн</Link>
          <Link to="/log" className='head'>Войти в кабинет</Link>
          <Link to="/letter" className='head-btn'>письмо</Link>
          <Link to="/registration" className='head'>Зарегистрироваться</Link>
        </nav>
       
        <MainContent />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
