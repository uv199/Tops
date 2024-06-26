import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Files
import Product from "../ui/pages/admin/AdminProduct/Product";
import Collection from "../ui/pages/user/Collection/Collection";
import QuickView from "../ui/componenet/QuickView/QuickView";
import Header from "../ui/componenet/Header/Header";
import Footer from "../ui/componenet/Footer/Footer";
import Home from "../ui/pages/user/Home/Home";
import Login from "../ui/pages/auth/Login/Login";
import Register from "../ui/pages/auth/Register/Register";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Header />
          <Routes>
            {/* ---------COMMONN-------- */}
            <Route path="/" element={<Home />} />

            {/* ---------ADMIN-------- */}

            {/* ---------AUTH-------- */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ---------USER-------- */}
          </Routes>
          <Footer />
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
