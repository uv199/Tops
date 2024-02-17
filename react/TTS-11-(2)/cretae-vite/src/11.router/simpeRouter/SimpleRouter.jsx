import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./service/Service";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Error404 from "./Error404";
import BikeService from "./service/BikeService";
import CarService from "./service/CarService";

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
          <Route path="*" element={<Error404 />} />
          {/*------------ nested route ------------- */}
          <Route path="/service">
            <Route index element={<Service />} />
            <Route path="bike" element={<BikeService />} />
            <Route path="car" element={<CarService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
