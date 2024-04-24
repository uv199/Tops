import React from "react";
import {  NavLink } from "react-router-dom";



export default function BottomHeader() {

  return (
    <div  className=" d-flex justify-content-center gap-5  flex-column align-items-center">
      <div className="flex justify-center gap-4 px-5 py-3 ">
            <NavLink to={"Gold"} >
            ALL JEWELLERY
            </NavLink>
            <NavLink to="/Gold">
            GOLD
            </NavLink>
             <NavLink to={"Gold"}>
            DIAMOND
            </NavLink>
            <NavLink to={"Gold"}>
            ERRINGS
            </NavLink>
            <NavLink to={"Gold"}>
            RINGS
            </NavLink>
            <NavLink to={"Gold"}>
            MIA
            </NavLink>
            <NavLink to={"Gold"}>
            COLLECTIONS
            </NavLink>
            <NavLink to={"Gold"}>
            WEDDING
            </NavLink>
            <NavLink to={"Gold"}>
            GIFTING
            </NavLink>
            <NavLink to={"Gold"}>
            GOLDEN HARVEST
            </NavLink>
            <NavLink to={"Gold"}>
            MORE
            </NavLink>
            <NavLink to={"Gold"}>
            PROFILE
            </NavLink>
            
           
            
      </div>
    </div>
  );
}
