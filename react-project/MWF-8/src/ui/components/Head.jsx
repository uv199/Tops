import React from "react";

export default function Head() {
  return (
    <div>
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
              <li className="nav-item ">
                <a className="nav-link text-danger " href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="about.html">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="cart.html">
                  <img src="images/cart.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      /
    </div>
  );
}
