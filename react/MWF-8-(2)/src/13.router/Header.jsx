import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navDiv d-flex gap-4 justify-content-center align-items-center m-4">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/service"}>Service</NavLink>
      </li>
      <li>
        <NavLink to={"/product"}>Product</NavLink>
      </li>
    </div>
  );
}
