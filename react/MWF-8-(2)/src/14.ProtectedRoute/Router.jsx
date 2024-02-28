import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";
import About from "./About";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<ProtectedRoute component={<About />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
