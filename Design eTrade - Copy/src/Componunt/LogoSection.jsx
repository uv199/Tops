import React from "react";
import logo from "../Images/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function LogoSection() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#EBDFF3  ",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} style={{ width: "100px", height: "50px" }} />
        <div>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "25px",
              paddingTop: "15px",
            }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: "30px",
            paddingTop: "15px",
            paddingRight: "15px",
          }}
        >
          <CiSearch />
          <CiHeart />
          <CiShoppingCart />
          <CgProfile />
        </div>
      </div>
    </div>
  );
}
