import React from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import Login from "./Login";
import { AdminRoute, AuthRoute } from "./AuthRoute";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/profile"
            element={<AuthRoute Component={<Profile />} />}
          />
          <Route path="/about" element={<AdminRoute Component={<About />} />} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={Error404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
