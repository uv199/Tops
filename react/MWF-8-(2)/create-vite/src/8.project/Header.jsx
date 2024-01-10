import React from "react";
import "./index.css";
import { Input } from "reactstrap";
import { Search } from "lucide-react";
export default function Header() {
  return (
    <div className="header_div">
      <h1 className="text-light">Puma</h1>
      <div className="list_div">
        <li>Home</li>
        <li>Shose</li>
        <li>Contact</li>
        <li>About</li>
      </div>
      <div className="d-flex align-items-center">
        <Input style={{ minWidth: "20vw" }} placeholder="Search Your Text.." />
        <Search className="ms-4" color="#ffff" />
      </div>
    </div>
  );
}
