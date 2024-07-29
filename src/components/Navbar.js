// src/Navbar.js

// import '../styles/Navbar.css';

import { background, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CartIcon } from '../icons/CartIcon';
import { HeartIcon } from '../icons/HeartIcon';
import { UserIcon } from '../icons/UserIcon';
import { YurtaIcon } from '../icons/YurtaIcon';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  // const handleSearchClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <nav>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        padding="12px 152px"
        gap="12px"
      >
        {/* <Flex justifyContent="space-between" gap="12px" alignItems="center"> */}
        <NavLink to="/">
          <YurtaIcon />
        </NavLink>
        {/* <NavLink className="head" to="/catalog">
          <Text color="textPrimary" margin={0}>
            Каталог
          </Text>
        </NavLink> */}
        <NavLink to="/forum">
          <Text color="textPrimary" margin={0} fontSize="16px" fontWeight={400}>
            Форум
          </Text>
        </NavLink>
        {/* <NavLink to="/events">
          <Text color="textPrimary" margin={0} fontSize="16px" fontWeight={400}>
            События
          </Text>
        </NavLink> */}
        {/* <NavLink to="/home">
          <Text color="textPrimary" margin={0} fontSize="16px" fontWeight={400}>
            Для дома
          </Text>
        </NavLink> */}
        <NavLink to="/room-interior">
          <Text color="textPrimary" margin={0} fontSize="16px" fontWeight={400}>
            Интерьер комнаты
          </Text>
        </NavLink>
        {/* </Flex> */}
        <Input
          borderColor="border"
          borderRadius="4px"
          color="textPrimary"
          maxWidth="60%"
        />
        {/* <Flex justifyContent="space-between" gap="12px" alignItems="center"> */}
        <NavLink to="/log">
          <UserIcon width="22.5px" height="22.5px" />
        </NavLink>
        <NavLink to="/wishlist">
          <HeartIcon width="22.5px" height="22.5px" />
        </NavLink>

        <NavLink to="/cart">
          <CartIcon width="22.5px" height="22.5px" />
        </NavLink>
        <NavLink to="/letter">
          <Button background="primary" _hover={{ background: '#3182bc' }}>
            Письмо
          </Button>
        </NavLink>
        {/* </Flex> */}
        {/* <div className="search-container">
          <input
            type="text"
            className={`search-input ${expanded ? 'expanded' : ''}`}
            placeholder="Search..."
          />
          <span className="search-icon" onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div> */}
      </Flex>
    </nav>
  );
};

export default Navbar;
