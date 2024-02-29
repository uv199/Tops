import React from "react";
import { Button, Input } from "reactstrap";
import "./index.css";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </div>
      <div>
        <User />
        <Button>Login</Button>
      </div>
    </div>
  );
}
