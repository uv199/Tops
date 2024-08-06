import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </div>
  );
}
