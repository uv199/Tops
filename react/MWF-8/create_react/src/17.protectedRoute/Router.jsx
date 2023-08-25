import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import NavBar from "./NavBar";
import Login from "./Login";
import Auth from "./Auth";
import Profile from "./Profile";
import ProtedRoute from "./ProtedRoute";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Auth>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<ProtedRoute components={<Profile />} />}
            />
          </Routes>
        </Auth>
      </BrowserRouter>
    </>
  );
}
