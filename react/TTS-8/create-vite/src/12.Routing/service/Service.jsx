import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../index.css";

export default function Service() {
  return (
    <>
      <div className="d-flex flex-column">
        <NavLink to={"/service/bike"}>Bike</NavLink>
        <NavLink to={"/service/car"}>Car</NavLink>
      </div>
      <h1>Service</h1>
      <Outlet />
    </>
  );
}
