import { Layout, Menu, theme } from "antd";
const { Header } = Layout;
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
import { ShoppingCart, Search } from "lucide-react";

import { SearchContext } from "../../App";

export default function HeaderCom(props) {
  const [isOpen, setIsOpen] = useState(false);

  const data = useContext(SearchContext);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <div>
          <Navbar expand={"lg"}>
            <NavbarBrand href="/">
              Sne<span className="text-danger">Ke</span>Rs
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="">Women</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Men</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Kids</NavLink>
                </NavItem>
              </Nav>
              <ShoppingCart className="me-3" color="#685e5e" />
              {props?.searchBarShow && (
                <>
                  <input
                    style={{
                      outline: "none",
                      border: " 1px solid #918888",
                    }}
                    onChange={(e) => data?.setSearchTxt(e?.target?.value)}
                    className="rounded-1  w-25 p-1 ps-2 me-3"
                    placeholder="Search your text here....!"
                    type="text"
                  />
                  <Search color="#685e5e" />
                </>
              )}
            </Collapse>
          </Navbar>
        </div>
        {/* </Header> */}
      </div>
    </>
  );
}
