import React from 'react';
import { useRef, useState } from 'react';

import { switcherData } from './RoomSwitcherData';

function RoomSwitcher() {
  const [catalog, setCatalog] = useState(switcherData);

  const chosenCatalog = (searchTerm) => {
    const newCatalog = switcherData.filter(
      (element) => element.searchTerm === searchTerm,
    );
    setCatalog(newCatalog);
  };

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const containerRef = useRef();

  // const handleScroll = (scrollAmount) => {
  //   var newScrollPosition = scrollPosition + scrollAmount;
  //   if (newScrollPosition < 0) newScrollPosition = 0;
  //   else setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft = newScrollPosition;
  // };

  return (
    <div className="room-switcher">
      <div className="room-switcher-catalog">
        <button onClick={() => setCatalog(switcherData)}>Все</button>
        <button onClick={() => chosenCatalog('гостинная')}>Гостинная</button>
        <button onClick={() => chosenCatalog('спальня')}>Спальня</button>
        <button onClick={() => chosenCatalog('кухня')}>Кухня</button>
        <button onClick={() => chosenCatalog('рабочая')}>Рабочая зона</button>
        <button onClick={() => chosenCatalog('балкон')}>Балкон</button>
      </div>
    </div>
  );
}

export default RoomSwitcher;
