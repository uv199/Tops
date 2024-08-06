import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import Error404 from "./Error404";
import AuthRoute from "./AuthRoute";
import Cart from "./Cart";
import Product from "./product/Product";
import ProductDetail from "./product/ProductDetail";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="flex py-3 list-none justify-center gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </div> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" Component={Login} />
          <Route path="/cart" element={<AuthRoute Component={<Cart />}/>} />
          <Route
            path="/profile"
            element={<AuthRoute Component={<Profile />} />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
