import React from "react";
import { Button, Input } from "reactstrap";
import "./header.css";
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
      </div>
      <div>
        <User
          className="me-3"
          role="button"
          onClick={() => navigate("/profile")}
        />

        <Button color="danger" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </div>
  );
}
