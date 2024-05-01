import React from "react";
import "./headerStyle.css";

export default function Navbar() {
  return (
    <div className="header-style">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>Perfumes</h1>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/shop">SHOP</a>
              </li>
              <li>
                <a href="/special">SPECIAL</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/our-stores">OUR STORES</a>
              </li>
              <li>
                <a href="/gifting">GIFTING</a>
              </li>
            </ul>
          </div>
          <div className="navbar-icons"></div>
        </div>
      </nav>
    </div>
  );
}
