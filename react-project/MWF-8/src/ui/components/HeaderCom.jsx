import { Search } from "lucide-react";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function HeaderCom(props) {
  return (
    <div>
      <Navbar expand={"lg"} style={{ backgroundColor: "lightcoral" }}>
        <NavbarBrand style={{ color: "white" }} href="/">
          SH<span style={{ color: "black" }}>Oe</span>S CO
          <span style={{ color: "black" }}>Mp</span>ANY
        </NavbarBrand>

        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Men</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Women</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Kids</NavLink>
            </NavItem>
          </Nav>
          <input
            style={{
              outline: "none",
              color: "#7c6e6e",
            }}
            className="border-0 rounded-1 p-1 w-25 ps-2 "
            type="text"
            placeholder="Search your text here....! "
            onChange={(e) => props?.setSearchText(e?.target?.value)}
          />
          <Search className="ms-2 me-5" color="#fff" />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
