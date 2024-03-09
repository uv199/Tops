import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  Button,
} from "reactstrap";

export default (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/login")
  };

  return (
    <div>
      <Navbar
        expand="xl"
        style={{ width: "100vw", backgroundColor: "lightcoral" }}
        className="d-flex"
        {...args}
      >
        <div className="w-25">
          <NavbarBrand href="/">
            <b> Tops</b>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </div>
        <div className="w-75 d-flex justify-content-between">
          <div className=" w-100 ">
            <Nav className="gap-5 " navbar>
              <NavItem>
                <NavLink to={"/"}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/about"}>Abount</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/service"}>Service</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Button color="danger" className="me-3" onClick={() => redirect()}>
            Login
          </Button>
        </div>
      </Navbar>
    </div>
  );
};
