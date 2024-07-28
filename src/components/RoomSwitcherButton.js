import React from 'react';
/*import { useState, useRef } from "react";
import { switcherData } from "./RoomSwitcherData";*/

function RoomSwitcherButton() {
  return (
    <div>
      <button className="change">все</button>
      <button className="change">Гостиная</button>
      <button className="change">Спальня</button>
      <button className="change">Кухня</button>
      <button className="change">Прихожая</button>
      <button className="change">Ванная</button>
    </div>
  );
}

export default RoomSwitcherButton;
