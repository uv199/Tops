import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./service/Service";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Error404 from "./Error404";
import "./index.css";
import Car from "./service/Car";
import Bike from "./service/Bike";
import Header from "./Header";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service">
            <Route index element={<Service />} />
            <Route path="car" element={<Car />} />
            <Route path="bike" element={<Bike />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
