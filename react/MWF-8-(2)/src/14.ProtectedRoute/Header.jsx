import { PersonStanding, User } from "lucide-react";
import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    localStorage.setItem("isLogin", "yes");
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "darkgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="w-75 d-flex justify-content-center gap-4 m-3">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </div>
      <div className="w-25 gap-4 align-items-center d-flex justify-content-end pe-4">
        <User role="button" onClick={() => navigate("/profile")} />
        <Button color="danger" onClick={() => loginHandler()}>
          Login
        </Button>
      </div>
    </div>
  );
};
