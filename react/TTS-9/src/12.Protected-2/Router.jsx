import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Home from "./Home";
import Contact from "./Contact";
import Error404 from "./Error404";
import { AdminProtected, ProtectedRoute } from "./ProtectedRoute";
import Admin from "./Admin";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contact"
              element={<ProtectedRoute Componenet={<Contact />} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute Componenet={<Profile />} />}
            />
            <Route
              path="/admin"
              element={<AdminProtected Componenet={<Admin />} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
