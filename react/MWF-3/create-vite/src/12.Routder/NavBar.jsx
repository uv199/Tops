import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./index.css";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navDiv p-2">
      <Navbar expand="lg">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="linkTag me-auto d-flex gap-3" navbar>
            <NavItem>
              {/* // NOTE - we cant get active class in Link tage so we use NavLink */}
              <NavLink to={""}>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/service"}>SERVICE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/contact"}>CONTACT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/product"}>PRODUCT</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
