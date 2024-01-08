import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div>
      <ul className="d-flex gap-3">
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>SERVICE</NavLink>
        </li>
      </ul>
    </div>
  );
}
