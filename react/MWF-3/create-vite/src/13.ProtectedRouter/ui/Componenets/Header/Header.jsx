import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import Person from "./circle-user-round.svg";
import { Button } from "reactstrap";
import RegisterModal from "../Modal/RegisterModal";

export default function Header() {
  const [registerModal, setRegisterModal] = useState(false);
  
  const registerToggle = () => setRegisterModal(!registerModal);

  return (
    <>
      <RegisterModal toggle={registerToggle} modal={registerModal} />
      <header>
        <h1>UV</h1>
        <div className="w-100  d-flex justify-content-between align-items-center">
          <div className="linkContainer">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
          </div>
          {/* <NavLink to={"/profile"}>
            <img
              style={{ fontWeight: "bold", fill: "white" }}
              src={Person}
              alt=""
            />
          </NavLink> */}
          <Button
            className="me-4"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={registerToggle}
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
}
