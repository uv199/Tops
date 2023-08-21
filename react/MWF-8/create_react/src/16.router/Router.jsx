import React from "react";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Page404 from "./Page404";
import "./index.css";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
        </ul> */}
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/test" element={<Home />}>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
          </Route>
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
