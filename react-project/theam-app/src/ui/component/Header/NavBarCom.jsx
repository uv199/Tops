import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./index.scss";
import { useSelector } from "react-redux";

export default function NavBarCom() {
  const navigate = useNavigate();
  let user = useSelector((state) => state.auth.user);
  console.log("user", user);
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Furni<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact us</NavLink>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li className="me-5">
                <a className="nav-link" href="cart.html">
                  <img src="images/cart.svg" />
                </a>
              </li>
              "{}"
              {JSON.stringify(user) !== "{}" ? (
                <li>
                  <NavLink className="nav-link" to="/profile">
                    <img src="images/user.svg" />
                  </NavLink>
                </li>
              ) : (
                <li>
                  <a className="nav-link" href="#">
                    <Button
                      className="ps-4 pe-4"
                      onClick={() => navigate("/login")}
                    >
                      Signup
                    </Button>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
