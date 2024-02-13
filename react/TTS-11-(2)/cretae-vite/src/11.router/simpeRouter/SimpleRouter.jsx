import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Error404 from "./Error404";

export default function SimpleRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="d-flex gap-4">
          {/* -----link----- */}
          {/* <Link to={"home"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"service"}>Service</Link> */}

          {/* -----Nav-link----- */}
          {/* <NavLink to={"home"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"service"}>Service</NavLink> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
