import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header/Header";
import Shop from "../component/Header/Shop";
import Home from "../component/Header/Home";
import Login from "../component/Header/Login";
import Reg from "../component/Header/Reg";
import Profile from "../component/Header/Profile";
import Ourstore from "../component/Header/Ourstore";
import AjmalStudio from "../component/Header/AjmalStudio";
import Product from "../ui/Admin/Product/Product";
import User from "../ui/Admin/User/User";
import Order from "../ui/Admin/Order/Order";
import ProductForm from "../ui/Admin/Product/ProductForm";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ourstore" element={<Ourstore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ajmalstudio" element={<AjmalStudio />} />

          {/* ----------- admin page ---------- */}
          <Route path="/admin-product" element={<Product />} />
          <Route path="/admin-product-form" element={<ProductForm />} />
          <Route path="/admin-user" element={<User />} />
          <Route path="/admin-order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
