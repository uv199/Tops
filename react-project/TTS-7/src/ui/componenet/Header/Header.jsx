import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Collapse,
  Col,
  Row,
} from "reactstrap";
import logo from "../images/logo.png";
import { Search, ShoppingCart } from "lucide-react";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="text-center p-4 bg-black text-white text-sm leading-5 font-sans">
        Flat 10% OFF On Orders above 1499 INR, Flat 20% OFF on orders above 1999
        INR - Free Shipping on orders above 999 INR
      </div>
      <Navbar color="light" light expand="md" className="py-0 fixed-top px-5">
        <NavbarBrand href="/" className="flex items-center">
          <img src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto flex" navbar>
            <NavItem>
              <NavLink
                href="/"
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                HOME
              </NavLink>
            </NavItem>
            <Dropdown
              nav
              inNavbar
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              isOpen={dropdownOpen}
              // isOpen={true}
              toggle={() => setDropdownOpen(!dropdownOpen)}
              className="pos"
            >
              <DropdownToggle
                nav
                caret
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                COLLECTIONS
              </DropdownToggle>
              <DropdownMenu className="">
                <Row className="justify-center">
                  <Col md="2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 mt-2.5 pl-2">
                      Collections
                    </h4>
                    <ul>
                      <NavItem>
                        <NavLink
                          href="/collections/perfume-spray"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Perfume Sprays
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/mist"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Mist
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/solid-perfume"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Solid Perfume
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/perfumed-creme"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Perfume Creme
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/beard-balm"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Beard Balm
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/candles"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Candles
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/reed-diffuser"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Reed Diffuser
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/gift-packs"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Gift Packs
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/apps/gbb/easybundle/1"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          My Custom Gift Box
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="/collections/foot-spray"
                          className="mb-2 text-gray-800 capitalize text-base"
                        >
                          Foot Spray
                        </NavLink>
                      </NavItem>
                    </ul>
                  </Col>
                  <Col md="8">
                    <div className="grid grid-cols-5 gap-4">
                      <div>
                        <a
                          href="/collections/perfume-spray"
                          title="Perfume Spray"
                        >
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/p-mmega-perfume-spray-roll-on.png"
                            alt="Perfume Spray"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/collections/mist" title="Body Mist">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-mist.png"
                            alt="Body Mist"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="/collections/solid-perfume"
                          title="Solid Perfume"
                        >
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-solid-perfume.png"
                            alt="Solid Perfume"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="/collections/perfumed-creme"
                          title="Perfume Creme"
                        >
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-perfume-creme.png"
                            alt="Perfume Creme"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/collections/beard-balm" title="Beard Balm">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-beard-balm.png"
                            alt="Beard Balm"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/collections/candles" title="Candles">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-candles.png"
                            alt="Candles"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="/collections/reed-diffuser"
                          title="Reed Diffuser"
                        >
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-reed-diffuser-menu.png"
                            alt="Reed Diffuser"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/apps/gbb/easybundle/1" title="Gifting">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/28/assets/MyCustom-Gift-Box.png"
                            alt="Gifting"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/collections/foot-spray" title="Foot Spray">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/n-mmega-foot-spray-menu.png"
                            alt="Foot Spray"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/products/order-samples" title="Samples">
                          <img
                            className="img-fluid"
                            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/mmega-samples.png"
                            alt="Samples"
                          />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink
                href="/new-arrivals"
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                NEW ARRIVALS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/yearly-sample-subscription"
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                YEARLY SAMPLE SUBSCRIPTION
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/order-samples"
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                ORDER SAMPLES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/my-custom-gift-box"
                className="mr-4 uppercase text-gray-800 py-5 px-1 mt-2"
              >
                MY CUSTOM GIFT BOX
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto flex" navbar>
            <NavItem>
              <NavLink href="/search">
                <Search size={20} className="ml-4" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">
                <ShoppingCart size={20} className="ml-4" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
