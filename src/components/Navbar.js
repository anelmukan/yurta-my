// src/Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleSearchClick = () => {
        setExpanded(!expanded);
    };



    return (
        <nav>
            <div className="navbar-left">
                <NavLink className="home-head" to="/">YurtaHome</NavLink>
                <NavLink className="head" to="/Catalog">Каталог</NavLink>
                <NavLink className="head" to="/Forum">Форум</NavLink>
                <NavLink className="head" to="/Events">События</NavLink>
                <NavLink className="head" to="/home">Для дома</NavLink>
                <NavLink className="head" to="/Log">Войти</NavLink>
                <NavLink className="head-btn" to="/Letter">письмо</NavLink>
                <NavLink className="head" to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
                <div className="search-container">
                    <input
                        type="text"
                        className={`search-input ${expanded ? 'expanded' : ''}`}
                        placeholder="Search..."
                    />
                    <span className="search-icon" onClick={handleSearchClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    
                </div>
                
            </div>
            
         
        </nav>
        
    );
};

export default Navbar;




