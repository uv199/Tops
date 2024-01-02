import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import RegisterModal from "./modal/RegisterModal";

function HeaderRS(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [registerModal, setRegisterModal] = useState(false);

  const registerToggle = () => setRegisterModal(!registerModal);

  return (
    <div>
      <RegisterModal modal={registerModal} toggle={registerToggle} />
      <Navbar style={{ width: "100vw" }} {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className=" w-100  d-flex align-items-center  justify-content-between "
            navbar
          >
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <Button onClick={registerToggle} className="me-5" color="danger">
              Sign-Up
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderRS;
