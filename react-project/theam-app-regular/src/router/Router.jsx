import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/Pages/Home/Home";
import About from "../ui/Pages/About/About";
import Shop from "../ui/Pages/Shop/Shop";
import NavBarCom from "../ui/component/Header/NavBarCom";
import FooterCom from "../ui/component/Footer/FooterCom";
import Page404 from "../ui/Pages/404-page/Page404";
import { Provider as AuthContext } from "react-redux";
import Login from "../ui/Pages/Login/Login";
import { ToastContainer } from "react-toastify";
import Profile from "../ui/Pages/Profile/Profile";
import Product from "../ui/Pages/Admin/product";
import Dashbord from "../ui/Pages/Admin/dashbord/Dashbord";
import { store } from "../redux/app/store";
import SignUp from "../ui/Pages/Register/SignUp";
import Order from "../ui/Pages/Admin/Order/Order";
import User from "../ui/Pages/Admin/User/User";

export default function Router() {
  return (
    <>
      <AuthContext store={store}>
        <BrowserRouter>
          <NavBarCom />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/dashbord" element={<Dashbord />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/orders" element={<Order />} />
            <Route exact path="/users" element={<User />} />
            <Route exact path="*" element={<Page404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
        <ToastContainer limit={1} autoClose={2000} />
      </AuthContext>
    </>
  );
}
