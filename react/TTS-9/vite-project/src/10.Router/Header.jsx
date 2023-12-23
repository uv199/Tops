import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <div>
      <ul className="d-flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>Service</NavLink>
        </li>
      s</ul>
    </div>
  );
}

/*
export default function Header() {
  return (
    <div>
      <ul className="d-flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>Service</NavLink>
        </li>
      </ul>
    </div>
  );
}
*/

/*
    <NavItem>
        <NavLink href="/components/">Components</NavLink>
    </NavItem>
*/
