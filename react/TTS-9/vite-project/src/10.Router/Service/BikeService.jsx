import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function BikeService() {
  return (
    <>
      <h1>BikeService</h1>
      <NavLink to={"/service/bike/sports"}>Sports</NavLink>
      <NavLink to={"/service/bike/normal"}>Normal</NavLink>
      <Outlet />
    </>
  );
}
