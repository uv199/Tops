import React from "react";
import Home from "./Home";
import Service from "./service/Service";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import "./index.css";
import BikeService from "./service/BikeService";
import CarService from "./service/CarService";

export default function Router() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          {/* <ul>
          <li>
          <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
        </ul> */}
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/service">
              <Route index element={<Service />} />
              <Route path="bike" element={<BikeService />} />
              <Route path="car" element={<CarService />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
