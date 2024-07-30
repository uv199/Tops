import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="flex justify-center">
          <ul className="flex gap-3">
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/login"}>Login</Link>
          </ul>
        </div> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
