import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/Home/Home";
import Header from "../ui/component/Header/Header";
import Login from "../ui/pages/Auth/Signin/Login";
import SignUp from "../ui/pages/Auth/Register/Register";
import Account from "../ui/pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import Product from "../ui/pages/admin/Product/Product";
import ProductForm from "../ui/pages/admin/Product/ProductForm";
import Order from "../ui/pages/admin/Order/Order";
import User from "../ui/pages/admin/User/User";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/admin-product" element={<Product />} />
          <Route path="/admin-product-form" element={<ProductForm />} />
          <Route path="/admin-order" element={<Order />} />
          <Route path="/admin-user" element={<User />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
