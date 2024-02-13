import React from "react";
import { Input } from "reactstrap";
import "./index.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"service"}>Service</NavLink>
      </div>
      <div>
        <Input className="input_tag" placeholder="Search your text here.." />
      </div>
    </div>
  );
}
