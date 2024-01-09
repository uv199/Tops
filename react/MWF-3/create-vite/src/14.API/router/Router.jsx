import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/page/Home";
import Contact from "../ui/page/Contact";
import About from "../ui/page/About";
import Product from "../ui/page/product/Product";
import Header from "../ui/componenet/Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
