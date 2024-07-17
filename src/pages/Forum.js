import React, { useState } from "react";
import "../styles/Forum.css";
import RoomSwitcher from "../components/RoomSwitcher";
import { switcherData } from "../components/RoomSwitcherData";

function Forum() {
const [RoomSwitcherButton,setItems] = useState(switcherData);
return (
    <div>
        <RoomSwitcher/>
    </div>
)
       
       
      
      



}

export default Forum;
