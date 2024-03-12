import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../13.Project/ui/Contact/Contact";
import About from "../13.Project/ui/About/About";
import Home from "../13.Project/ui/Home/Home";
import Header from "../13.Project/componenet/Header/Header";
import Login from "../13.Project/ui/Login/Login";
import Profile from "../13.Project/ui/Profile/Profile";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
