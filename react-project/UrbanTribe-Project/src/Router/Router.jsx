import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";

// files
import Header from "../ui/Component/Header/Header";
import Footer from "../ui/Component/Footer/Fotter";
import Login from "../ui/Pages/Auth/Signin/Login";
import AddToCart from "../ui/Pages/Auth/AddToCart";
import Home from "../ui/Pages/Common/Home/Home";
import Register from "../ui/Pages/Auth/Register/Register";
import Product from "../ui/Pages/Admin/Product/Product";
import User from "../ui/Pages/Admin/User/User";
import Order from "../ui/Pages/Admin/Order/Order";
import Profile from "../ui/Pages/Common/Profile/Profile";
import CommonProduct from "../ui/Pages/Common/Product/CommonProduct";
import { Provider } from "react-redux";
import { store } from "../Redux/app";

export default function Router() {
  return (
    <>
      <Provider store={store}>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/addtocart" Component={AddToCart} />
              <Route path="/profile" Component={Profile} />

              {/* --------ADMIN--------- */}
              <Route path="/admin-product" element={<Product />} />
              <Route path="/admin-user" element={<User />} />
              <Route path="/admin-order" element={<Order />} />

              {/* --------COMMON--------- */}

              <Route path="/product/:type" element={<CommonProduct />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </BrowserRouter>
        </CookiesProvider>
      </Provider>
    </>
  );
}
