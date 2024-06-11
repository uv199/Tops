import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css"

export default function Header() {
  return (
    <div>
      <div className="flex gap-3">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      {/* <div className="flex gap-3">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div> */}
    </div>
  );
}
