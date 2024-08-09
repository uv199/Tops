import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header";
import Home from "../UI/Pages/Home";
import Product from "../UI/Pages/Product";
import Login from "../UI/Pages/Login";
import Profile from "../UI/Pages/Profile";
import ProductDetails from "../UI/Pages/ProductDetails";
import Login_2 from "../UI/Pages/Login_2";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/product"
            element={<Product />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/details"
            element={<ProductDetails />}
          />
          <Route
            path="/login_2"
            element={<Login_2 />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
