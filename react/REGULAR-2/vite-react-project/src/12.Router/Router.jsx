import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import HeadCom from "./HeadCom";
import "./index.css";
import Page404 from "./Page404";
import BikeService from "./BikeService";
import CarService from "./CarService";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <HeadCom /> */}
        <ul>
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* nested route */}
          <Route path="/service">
            <Route index element={<Service />} />
            <Route path="bike" element={<BikeService />} />
            <Route path="car" element={<CarService />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
