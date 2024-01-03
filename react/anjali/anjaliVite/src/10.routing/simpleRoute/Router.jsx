import React from "react";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./index.css";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <ul className="d-flex gap-3">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" Component={ContactUs} />
          <Route path="*" Component={Error404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
