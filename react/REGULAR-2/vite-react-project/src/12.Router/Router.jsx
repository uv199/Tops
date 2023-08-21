import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>
              <HomeIcon color="#b92727" />
            </Link>
          </li>
          <li>
            <Link style={{ color: "red", textDecoration: "none" }} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/service">
              service
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
