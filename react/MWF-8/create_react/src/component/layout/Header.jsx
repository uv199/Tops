import React, { Component } from "react";
import "./head.css";

class Header extends Component {
  render() {
    return (
      <div className="head_container">
        <nav className="nav">
          <ul className="ul_nav">
            <li>About</li>
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
