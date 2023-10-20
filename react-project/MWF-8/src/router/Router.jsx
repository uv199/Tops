import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../ui/pages/Error-404/Error404";
import Home from "../ui/pages/Home/Home";
import HeaderCom from "../ui/components/Header/HeaderCom";
import FooterCom from "../ui/components/FooterCom";
import Kids from "../ui/pages/Kids";
import Men from "../ui/pages/Men";
import Women from "../ui/pages/Women";
import { Provider } from "react-redux";
import { store } from "../Redux/app/store";
import About from "../ui/pages/About";
import Contact from "../ui/pages/Contact";
import LoginForm from "../ui/pages/Login";
import Dashbord from "../ui/pages/Admin/Dashbord/Dashbord";
import ProductForm from "../ui/pages/Admin/Product/ProductForm";
import ProductCom from "../ui/pages/Admin/Product/ProductCom";
import Profile from "../ui/pages/Profile/Profile";
import ProductPage from "../ui/pages/ProductPage/ProductPage";
import SignUp from "../ui/pages/Signup/SignUp";
import UserList from "../ui/pages/Admin/User/UserList";
import Orders from "../ui/pages/Admin/Order/Orders";
import { AuthRoute, AdminAuth } from "./AuthRoute";
export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            {/* ---------------- Public ------------------ */}
            <Route path="/" element={<Home />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productpage/:id" element={<ProductPage />} />

            {/* ---------------- Auth ------------------ */}
            <Route
              path="/profile"
              element={<AuthRoute component={<Profile />} />}
            />

            {/* ---------------- admin ------------------ */}

            <Route
              path="products"
              element={<AdminAuth component={<ProductCom />} />}
            />
            <Route
              path="/orders"
              element={<AdminAuth component={<Orders />} />}
            />
            <Route
              path="/user"
              element={<AdminAuth component={<UserList />} />}
            />
            <Route
              path="/admin/dashboard"
              element={<AdminAuth component={<Dashbord />} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}
