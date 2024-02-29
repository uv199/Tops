import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import Header from "./Header";

export default function ProtectedRoute() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="d-flex gap-4"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
