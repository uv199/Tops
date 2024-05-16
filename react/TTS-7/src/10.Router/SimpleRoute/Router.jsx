import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="flex gap-3">
          <Link to={"/"}>HOME</Link>
          <Link to={"/aboute"}>ABOUT</Link>
          <Link to={"/contact"}>CONTACT</Link>
        </div> */}
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
