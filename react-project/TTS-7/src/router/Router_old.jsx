import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

// Files
import Product from "../ui/pages/admin/AdminProduct/Product";
import Collection from "../ui/pages/user/Collection/Collection";
import QuickView from "../ui/componenet/QuickView/QuickView";
import Header from "../ui/componenet/Header/Header";
import Footer from "../ui/componenet/Footer/Footer";
import Home from "../ui/pages/user/Home/Home";
import Login from "../ui/pages/auth/Login/Login";
import Register from "../ui/pages/auth/Register/Register";
import DataForm from "../ui/pages/auth/Register/DataForm";
import Profile from "../ui/pages/auth/Profile/Profile";
import { AdminAuth, AuthRoute } from "../ui/pages/auth/ProtectedRoute/Auth";
import Cart from "../ui/pages/user/Cart/Cart";
import AdminHeader from "../ui/componenet/Header/AdminHeader";


export default function Router() {
  let [cookies] = useCookies(["token", "user"]);
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
            
          {cookies?.user?.userType === 'admin' ? <AdminHeader/> : <Header />}
          <Routes>
            {/* ---------COMMONN-------- */}
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection/>} />

            {/* ---------ADMIN-------- */}
            <Route path="/admin-product" element={<AdminAuth Component={<Product/>} />} />

            {/* ---------AUTH-------- */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ---------USER-------- */}            
            <Route
              path="/profile"
              element={<AuthRoute Component={<Profile />} />}
            />
          </Routes>
          <Footer />
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
