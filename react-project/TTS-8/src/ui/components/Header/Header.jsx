import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { CircleUserRound } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";

export default () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loginToggle = () => setLoginModal(!loginModal);
  const RegisterToggle = () => setRegisterModal(!registerModal);
  const toggle = () => setIsOpen(!isOpen);

  //  state = { }
  const { token, user } = useSelector((state) => state?.authReducer);
  console.log("-----------  token----------->", token);

  const navigate = useNavigate();

  return (
    <>
      <LoginModal
        toggle={loginToggle}
        modal={loginModal}
        setModal={setRegisterModal}
      />
      <RegisterModal
        toggle={RegisterToggle}
        modal={registerModal}
        setModal={setLoginModal}
      />

      <Navbar
        expand="lg"
        style={{
          width: "100%",
          backgroundColor: "lightgray",
          position: "sticky",
          top: "0",
          zIndex: "1",
        }}
      >
        <NavbarBrand href="/">
          <b>ShoesMania</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navi">
          <Nav className="me-auto" navbar>
            {JSON.stringify(user) === "{}" || user?.userType === "customer" ? (
              <>
                <NavItem>
                  <NavLink className="m-2" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="m-2" to="/product">
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
            ) : (
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
            )}
          </Nav>
        </Collapse>
        {token ? (
          <CircleUserRound
            color="#706b6b"
            role="button"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <Button color="danger" onClick={loginToggle}>
            Login
          </Button>
        )}
      </Navbar>
    </>
  );
};
