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
import PopUp from "../Modal/Modal";

export default () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loginToggle = () => setModal(!modal);


  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <PopUp toggle={loginToggle} modal={modal} />
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
