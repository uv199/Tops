import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Service() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <button onClick={() => navigate("/")}>go to home</button>
      <ul>
        <li>
          <NavLink to={"/service/bike"}>Bike</NavLink>
        </li>
        <li>
          <NavLink to={"/service/car"}>Car</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
