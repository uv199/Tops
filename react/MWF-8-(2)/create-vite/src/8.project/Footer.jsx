import React from "react";
import "./index.css";
import data from "../../../../../JS-assignment/data.json"
import { Button, Input } from "reactstrap";
export default function Footer() {
  return (
    <div className="footer_div">
      <div className="section_1">
        <div>
          <h1 className="text-light">PUMA</h1>
          <p>We Provide Best Budget Segament Shose </p>
        </div>

        <div>
          <li>Home</li>
          <li>Shose</li>
          <li>About</li>
          <li>contact</li>
        </div>
        <div className="sub_sec_3">
          <div></div>
          <div className="subscribe">
            <Input placeholder="Enter your email " />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="rights_div">
        © 2024 India - surat All Rights are Reserved
      </div>
    </div>
  );
}
