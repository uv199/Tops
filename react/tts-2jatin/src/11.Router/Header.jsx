import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-3">
        <NavLink to={"/"}>Home </NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </ul>
    </div>
  );
}
