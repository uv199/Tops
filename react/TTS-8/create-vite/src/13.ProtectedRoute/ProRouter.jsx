import React, { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Logoin from "./Logoin";
import AuthRoute from "./AuthRoute";
import Home from "./Home";

export default function ProRouter() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>profile</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<AuthRoute component={<Profile />} />}
            />
            <Route path="/login" element={<Logoin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
