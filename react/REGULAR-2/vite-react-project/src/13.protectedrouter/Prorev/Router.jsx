import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Login from "./Login";
import NavbarCom from "./NavbarCom";
import Auth from "./Auth";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Auth>
          <NavbarCom />
          <Routes>
            <Route path="/" element={<ProtectedRoute component={<Home />} />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={<Profile />} />}
            />
          </Routes>
        </Auth>
      </BrowserRouter>
    </>
  );
}
