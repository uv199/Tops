import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div className="list-none flex gap-5 justify-center">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/product"}>Product</NavLink>
    </div>
  );
}
