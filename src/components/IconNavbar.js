// src/IconNavbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faChair, faTree, faBroadcastTower, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/IconNavbar.css';

const IconNavbar = () => {
    return (
        <div className="icon-navbar">
            <div className="icon-item">
            <a  href="" > <FontAwesomeIcon icon={faHome} size="2x" />
               <p>Квартира</p></a>
            </div>
            <div className="icon-item">
            <a href="">  <FontAwesomeIcon icon={faTree} size="2x" />
              <p>Дом</p></a> 
            </div>
            <div className="icon-item">
            <a href=""><FontAwesomeIcon icon={faBed} size="2x" />
                <p>Комната</p></a>
            </div>
            <div className="icon-item">
            <a href=""> <FontAwesomeIcon icon={faChair} size="2x" />
               <p>Дача</p></a>
            </div>
            <div className="icon-item">
            <a href=""><FontAwesomeIcon icon={faBroadcastTower} size="2x" />
               <p>Каналы</p></a>
            </div>
            <div className="icon-item">
            <a href=""> <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
               <p>События</p></a>
            </div>
        </div>
    );
};

export default IconNavbar;
