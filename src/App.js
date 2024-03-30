import React from 'react';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import YurtaHome from './menu/YurtaHome';
import Forum from './menu/Forum';
import './App.css';
import Shoppings from './menu/Shoppings';
import Design from './menu/Design';
import Room from './menu/Room';
import Flat from './SecondMenu/Flat';
import House from './SecondMenu/House';
import Komnata from './SecondMenu/Komnata';
import Village from './SecondMenu/Village';
import Channels from './SecondMenu/Channels';
import Events from './SecondMenu/Events';
import Sales from './SecondMenu/Sales';
import Top from './SecondMenu/Top';
import Letter from './menu/Letter';


function App() {

  return (
  <Router> 
  
  <nav>
 
  <Link to ="/" className='home-head'>YurtaHome</Link>
  <Link to ="/forum" className='head'>Форум</Link>
 <Link to ="/shoppings" className='head'>Покупки</Link>
 <Link to ="/design" className='head'>Дизайин</Link>
 <Link to ="/room" className='head'>Войти в кабинет</Link>
<Link to ="/letter" className='head-btn'>письмо</Link>
    </nav>
    <hr  />
    <nav>
    <Link to ="/flat" className='head'>квартира</Link>
  <Link to ="/house" className='head'>дом</Link>
 <Link to ="/komnata" className='head'>комната</Link>
 <Link to ="/village" className='head'>дача</Link>
 <Link to ="/channels" className='head'>каналы</Link>
 <Link to ="/events" className='head'>событие</Link>
 <Link to ="/sales" className='head'>предложение</Link>
 <Link to ="/top" className='head'>топ</Link>


 

    </nav>
    <hr  />
    <Routes>
    <Route path="/" element= {<YurtaHome/>}/>
    <Route path="/forum" element = {<Forum/>}/>
     <Route path="/shoppings" element={<Shoppings/>}/>
    <Route path="/design" element={<Design/>}/>
    <Route path="/room" element={<Room/>}/>
    <Route path ="/letter" element={<Letter/>}/>
    <Route path="/flat" element={<Flat/>}/>
    <Route path="/house" element={<House/>}/>
    <Route path="/komnata" element={<Komnata/>}/>
    <Route path="/village" element={<Village/>}/>
    <Route path="/channels" element={<Channels/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/sales" element={<Sales/>}/>
    <Route path="/top" element={<Top/>}/>

    </Routes>
    </Router>





  )

}



export default App;

