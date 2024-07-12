import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Header from "./Header";
import Login from "./Login";
import AuthRute, { AdminRute } from "./AuthRute";
import Admin from "./Admin";

export default function ProtectedRoute() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<AuthRute Component={<Profile />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminRute Component={<Admin />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
userType => user employee admin
home => all user without login -> common Route
Profile => all user but after login
admin =>only admin can access 
employee => admin and employee both can access 
user => user, admin and employee both can access - withlogin


*/
