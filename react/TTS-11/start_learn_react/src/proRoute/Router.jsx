import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import Auth from "./Auth";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* wrap auth because we want acceces context value from all componente  */}
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Auth>
      {/* </BrowserRouter> */}
    </>
  );
}
