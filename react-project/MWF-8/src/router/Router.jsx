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
export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/admin/dashboard" element={<Dashbord />} />
            <Route path="/admin/products" element={<ProductCom />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}
