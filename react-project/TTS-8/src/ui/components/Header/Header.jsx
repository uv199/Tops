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

export default () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loginToggle = () => setLoginModal(!loginModal);
  const RegisterToggle = () => setRegisterModal(!registerModal);
  const toggle = () => setIsOpen(!isOpen);

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

      <Navbar expand="lg" style={{ width: "100vw" }}>
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
        <Button color="danger" onClick={loginToggle}>
          Login
        </Button>
      </Navbar>
    </>
  );
};
