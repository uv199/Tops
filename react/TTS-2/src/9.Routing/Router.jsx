import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        {/* <div className="flex gap-3">
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          </div> */}
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" Component={About} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
