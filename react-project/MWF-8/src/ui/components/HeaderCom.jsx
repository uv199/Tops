import { Search } from "lucide-react";
import React, { useContext, useState } from "react";
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
import { SearchContext } from "../../App";

function HeaderCom(props) {
  // const serachCont = useContext(SearchContext);
  const { setSearchText } = useContext(SearchContext);
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
            // onChange={(e) => serachCont?.setSearchText(e?.target?.value)} // if you can't destructure a object
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <Search className="ms-2 me-5" color="#fff" />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
