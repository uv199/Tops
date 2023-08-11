import { Menu } from "antd/lib";
import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import { ShoppingCart } from "lucide-react";

export default function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      > */}

      <Navbar
        style={{ backgroundColor: "#9F86B5", color: "white" }}
        className="d-flex flex-column "
        {...args}
      >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Nav className=" d-flex flex-row me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Men</NavLink>
          </NavItem>
          <NavItem className="ms-3">
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Women
            </NavLink>
          </NavItem>
          <NavItem className="ms-3">
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Kids
            </NavLink>
          </NavItem>
        </Nav>
        <ShoppingCart color="#524E56" className="me-3" />'
        <input
          className="border border-light rounded w-30 me-2 p-1 ps-2"
          type="text"
          name=""
          id=""
          placeholder="Search your text here...!"
        />
        <Search color="#524E56" />
      </Navbar>

      {/* </Header> */}
    </>
  );
}
