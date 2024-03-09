import React from "react";
import Home from "./Home";
import Service from "./service/Service";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import "./index.css";
import Error404 from "./Error404";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="container d-flex gap-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>Abount</NavLink>
          <NavLink to={"/service"}>Service</NavLink>

          <NavLink to={"/contactt"}>Contact Us</NavLink>

          {/*<===== link ====>*/}
          {/* <Link to={"/"}>Home</Link>
          <Link to={"/about"}>Abount</Link>
          <Link to={"/service"}>Service</Link>
          <Link to={"/contact"}>Contact Us</Link> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* */
