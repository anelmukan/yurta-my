/* eslint-disable jsx-a11y/anchor-is-valid */
// src/IconNavbar.js

import '../styles/IconNavbar.css';

import {
  faBed,
  faBroadcastTower,
  faCalendarAlt,
  faChair,
  faHome,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const IconNavbar = () => {
  return (
    <div className="icon-navbar">
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faHome} size="2x" />
          <p>Квартира</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faTree} size="2x" />
          <p>Дом</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faBed} size="2x" />
          <p>Комната</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faChair} size="2x" />
          <p>Дача</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faBroadcastTower} size="2x" />
          <p>Каналы</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
          <p>События</p>
        </a>
      </div>
    </div>
  );
};

export default IconNavbar;
