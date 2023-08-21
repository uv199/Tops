import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

function HeadCom(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs>
      <NavItem>
        <NavLink >
          <Link to={"/home"}>Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to={"/about"}>About</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to={"/service"}>Service</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default HeadCom;
