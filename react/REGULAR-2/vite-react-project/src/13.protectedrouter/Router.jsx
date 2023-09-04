import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import NavBarCom from "./NavBarCom";
import Auth from "./Auth";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Auth>
          <NavBarCom />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </>
  );
}
