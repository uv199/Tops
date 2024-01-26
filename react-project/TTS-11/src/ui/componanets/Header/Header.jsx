import React from "react";
import { Input } from "reactstrap";
import "./header.css";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="head_container">
        <h1>SkyBags</h1>
        <div className="li_div">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </div>
        <div>
          <div className="d-flex align-items-center border border-dark rounded-3 ">
            <Search />
            <Input />
          </div>
        </div>
      </div>
    </>
  );
}
