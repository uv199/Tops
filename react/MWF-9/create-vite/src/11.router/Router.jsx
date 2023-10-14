import React from "react";
import Home from "./Home";
import Service from "./service/Service";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import "./index.css";
import Error404 from "./Error404";
import BikeService from "./service/BikeService";
import CarService from "./service/CarService";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="container d-flex gap-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>Abount</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/contactt"}>Contact Us</NavLink>
        </div>
        <Routes>
            
          <Route path="/" element={<Home />} />
          <Route path="/service">
            <Route index element={<Service />} />
            <Route path="bike" element={<BikeService />} />
            <Route path="car" element={<CarService />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* */
