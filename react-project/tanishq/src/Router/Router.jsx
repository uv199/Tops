import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header/Header";
import Home from "../UI/Page/User/Home/Home";
import Jewellery from "../UI/Page/User/Jewellery/Jewellery";
import Footer from "../UI/Component/Footer/Footer";
import Profile from "../UI/Page/Common/Profile/Profile";
import PageNotFound from "../UI/Page/Error404/PageNotFound";
import WishList from "../UI/Page/User/Wishlist/WishList";
import SingleProduct from "../UI/Page/User/Product/SingleProduct";
import Login from "../UI/Page/Common/Login/Login";
import Register from "../UI/Page/Common/Register/Register";
import Product from "../UI/Page/Admin/Product/Product";
import { ToastContainer } from "react-toastify";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* --------------------AUTH---------------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* --------------------ADMIN---------------- */}
          <Route path="/admin-product" element={<Product />} />

          {/* --------------------COMMON---------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          {/* --------------------ERROR-404---------------- */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
