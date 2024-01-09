import React from "react";
import { Input } from "reactstrap";
import "./header.css";

export default function Header() {
  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <div>
        <Input className="input_tag" placeholder="Search your text here.." />
      </div>
    </div>
  );
}
