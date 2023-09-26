import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import "./index.css";

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
            <Route path="/home" Component={Home} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
