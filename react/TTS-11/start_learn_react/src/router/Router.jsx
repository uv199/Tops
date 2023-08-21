import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home2 from "./Home2";

export default function Router() {
  return (
    <>
      <ul>
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
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}
