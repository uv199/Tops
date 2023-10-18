import React from "react";
import Home from "./Home";
import Service from "./service/Service";
import About from "./About";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import "./index.css";
import Error404 from "./Error404";
import BikeService from "./service/BikeService";
import CarService from "./service/CarService";
import HeaderCom from "./HeaderCom";
import Login from "./Login";
import AuthRoute from "./AuthRoute";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <HeaderCom />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />

          <Route path="/service">
            <Route index element={<Service />} />
            <Route path="bike" element={<BikeService />} />
            <Route path="car" element={<CarService />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* */
