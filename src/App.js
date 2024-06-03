import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import YurtaHome from './menu/YurtaHome';
import Forum from './menu/Forum';
import './App.css';
import Design from './menu/Design';
import Room from './menu/Room';
import Flat from './SecondMenu/Flat';
import House from './SecondMenu/House';
import Komnata from './SecondMenu/Komnata';
import Village from './SecondMenu/Village';
import Events from './SecondMenu/Events';
import Letter from './pages/Letter';
import Log from "./pages/Log";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className='home-head'>YurtaHome</Link>
        <Link to="/forum" className='head'>Форум</Link>
        <Link to="/design" className='head'>Дизайн</Link>
        <Link to="/log" className='head'>Войти в кабинет</Link> 
        <Link to="/letter" className='head-btn'>письмо</Link>
        <Link to="/registration" className='head'>Зарегистрироваться</Link>
      </nav>
      <hr />
      <nav>
        <Link to="/flat" className='head'>квартира</Link>
        <Link to="/house" className='head'>дом</Link>
        <Link to="/komnata" className='head'>комната</Link>
        <Link to="/village" className='head'>дача</Link>
        <Link to="/events" className='head'>событие</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<YurtaHome />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/design" element={<Design />} />
        <Route path="/room" element={<Room />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/flat" element={<Flat />} />
        <Route path="/house" element={<House />} />
        <Route path="/komnata" element={<Komnata />} />
        <Route path="/village" element={<Village />} />
        <Route path="/events" element={<Events />} />
        <Route path="/log" element={<Log />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
