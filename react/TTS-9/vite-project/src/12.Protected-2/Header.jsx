import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { Button } from "reactstrap";
export default function Header() {
  const loginHandler = () => {
    localStorage.setItem(
      "login",
      // for admin
      JSON.stringify({ login: true, userType: "admin" })
      // for norml user
      // JSON.stringify({ login: true, userType: "user" })
    );
  };

  const logoutHandler = () => {
    localStorage.removeItem("login");
  };

  return (
    <div className="p-3 d-flex gap-4 justify-align-content-between  align-items-center">
      <ul className="d-flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/admin"}>Admin</NavLink>
        </li>
      </ul>
      <Button color="danger" onClick={loginHandler}>
        Login
      </Button>
      <Button color="danger" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
}
