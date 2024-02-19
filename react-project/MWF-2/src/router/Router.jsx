import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/comman/Home/Home";
import SingleProduct from "../ui/pages/comman/SingleProduct/SingleProduct";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
