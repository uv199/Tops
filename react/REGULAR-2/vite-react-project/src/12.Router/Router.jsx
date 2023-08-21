import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HeadCom from "./HeadCom";
import "./index.css";
import Page404 from "./Page404";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <HeadCom /> */}
        <ul>
          <li>
            <NavLink to={"/home"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
        {/* <ul>
          <li>
            <Link to={"/home"}>home</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
