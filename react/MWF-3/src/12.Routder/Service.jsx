import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Service() {
  return (
    <>
      <ul className="linkTag">
        <li className="border rounded-2 border-black p-3">
          <NavLink to={"/service/bike"}>Bike</NavLink>
        </li>
        <li>
          <NavLink to={"/service/car"}>Car</NavLink>
        </li>
      </ul>
      <h1>Service</h1>
      {/*  need to specify in perent route (rule) */}
      <Outlet />
    </>
  );
}
