import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../ui/Contact/Contact";
import About from "../ui/About/About";
import Home from "../ui/Home/Home";
import Header from "../componenet/Header/Header";
import Login from "../ui/Login/Login";
import Profile from "../ui/Profile/Profile";
import AuthRoute from "./AuthRoute";

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
          <Route
            path="/profile"
            element={<AuthRoute Componenet={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
let data = {
  name: "urvish",
  userType: "customer",
  email: "uvpatel199@gmail.com",
  number: "1213",
  password: "123456", 
};

