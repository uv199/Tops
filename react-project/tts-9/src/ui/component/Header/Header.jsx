import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { CircleUserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="head_container">
        <h1 role="button" onClick={() => navigate("/")}>
          HelloM<span style={{ color: "red" }}>i</span>ni
        </h1>
        <div className="list_div">
          <>
            <NavItem>
              <NavLink className="m-2" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/shose-all">
                Shose
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/about">
                About
              </NavLink>
            </NavItem>
          </>
          <>
            <NavItem>
              <NavLink className="m-2" to="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/admin-product">
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/order">
                Order
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="m-2" to="/users">
                Users
              </NavLink>
            </NavItem>
          </>
        </div>
        <div className="btn_div">
          <CircleUserRound
            color="#706b6b"
            role="button"
            onClick={() => navigate("/profile")}
          />
          <Button color="danger" onClick={() => navigate("/signup")}>
            SignUp
          </Button>
        </div>
      </div>
    </>
  );
};
