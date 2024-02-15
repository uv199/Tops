import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../ui/Pages/Home";
import About from "../ui/Pages/About";
import Header from "../ui/Componenets/Header/Header";
import Footer from "../ui/Componenets/Footer/Footer";
import Profile from "../ui/Pages/Profile";
import { AdminProtectedRoute, ProtectedRoute } from "./ProtectedRoute";
import AnAuthorized from "../ui/Pages/AnAuthorized";
import Admin from "../ui/Pages/Admin";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" Component={Home} />
          <Route
            path="/about"
            element={<ProtectedRoute Component={<About />} />}
          />
          <Route path="/anauthorized" element={<AnAuthorized />} />

          {/* --------- Admin auth route -------- */}
          <Route
            path="/admin"
            element={<AdminProtectedRoute Component={<Admin />} />}
          />

          {/* --------- auth route -------- */}
          <Route
            path="/profile"
            element={<ProtectedRoute Component={<Profile />} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
