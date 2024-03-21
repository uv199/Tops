import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/comman/Home/Home";
import Header from "../ui/components/Header/Header";
import Footer from "../ui/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { CookiesProvider } from "react-cookie";
import Product from "../ui/pages/user/Product/Product";
import ProductAdmin from "../ui/pages/admin/Product/ProductAdmin";
import User from "../ui/pages/admin/User/User";
import Cart from "../ui/pages/user/Cart/Cart";
import UserOrders from "../ui/pages/user/UseOrders/UserOrders";
import Dashboard from "../ui/pages/admin/Dashbord/Dashboard";
import Conatct from "../ui/pages/comman/ContactUs/Conatct";
import Profile from "../ui/pages/comman/Profile/Profile";
import SingleProduct from "../ui/pages/user/Product/SingleProduct";
import Order from "../ui/pages/admin/Order/Order";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Provider store={store}>
            <Header />
            <Routes>
              {/* --------COMMON-------- */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Conatct />} />
              <Route path="/profile" element={<Profile />} />

              {/* --------USER-------- */}
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<UserOrders />} />

              {/* --------ADMIN-------- */}
              <Route path="/admin-dashbord" element={<Dashboard />} />
              <Route path="/admin-product" element={<ProductAdmin />} />
              <Route path="/admin-user" element={<User />} />
              <Route path="/admin-order" element={<Order />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </Provider>
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
