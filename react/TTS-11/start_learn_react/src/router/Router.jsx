import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home2 from "./Home2";
import "./index.css";
import CarService from "./CarService";
import BikeService from "./BikeService";
import Error404 from "./Error404";

export default function Router() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>home </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>about</NavLink>
        </li>
        {/* <li>
          <NavLink to={"/home"}>home2</NavLink>
        </li> */}
        <li>
          <NavLink to={"/service"}>service</NavLink>
        </li>
      </ul>
      {/* <ul>
        <li>
          <Link to={"/"}>home </Link>
        </li>
        <li>
          <Link to={"/about"}>acbout</Link>
        </li>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
        <li>
          <Link to={"/service"}>service</Link>
        </li>
      </ul> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Home />  // not acceptable give erro */}
        <Route path="*" element={<Error404 />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/service">
          <Route index element={<Service />} />
          <Route path="car" element={<CarService />} />
          <Route path="bike" element={<BikeService />} />
        </Route>
      </Routes>
    </>
  );
}
