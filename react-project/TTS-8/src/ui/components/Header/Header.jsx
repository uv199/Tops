import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { CircleUserRound } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loginToggle = () => setLoginModal(!loginModal);
  const RegisterToggle = () => setRegisterModal(!registerModal);
  const toggle = () => setIsOpen(!isOpen);

  //  state = { }
  const token = useSelector((state) => state?.authReducer?.token);
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

      <Navbar expand="lg" style={{ width: "100%" }}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
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
