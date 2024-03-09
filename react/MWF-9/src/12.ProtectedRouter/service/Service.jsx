import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <>
      <NavLink to={"/service/bike"}>Bike Service</NavLink>
      <NavLink to={"/service/car"}>Car Service</NavLink>
      <h1>Service</h1>
      <Outlet />
    </>
  );
}
