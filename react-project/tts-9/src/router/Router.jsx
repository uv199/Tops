import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../ui/pages/common/Home/Home";
import Footer from "../ui/component/Footer/Footer";
import Error404 from "../ui/pages/Error404/Error404";
import SignUp from "../ui/pages/common/SignUp/SignUp";
import Header from "../ui/component/Header/Header";
import { ToastContainer } from "react-toastify";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
