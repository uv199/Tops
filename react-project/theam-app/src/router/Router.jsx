import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/Pages/Home/Home";
import About from "../ui/Pages/About/About";
import Shop from "../ui/Pages/Shop/Shop";
import NavBarCom from "../ui/component/Header/NavBarCom";
import FooterCom from "../ui/component/Footer/FooterCom";
import Page404 from "../ui/Pages/404-page/Page404";
import { Provider as AuthContext } from "react-redux";
import { store } from "../redux/app/store";
import Login from "../ui/Pages/login/Login";

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
            <Route exact path="*" element={<Page404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </AuthContext>
    </>
  );
}
