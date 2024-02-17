import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./service/Service";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Error404 from "./Error404";
import "./index.css";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="navDiv d-flex gap-4 justify-content-center align-items-center m-4">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
        </div>
        {/* <div>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
        </div> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          {/* /service/car */}
          {/* /service/bike */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
