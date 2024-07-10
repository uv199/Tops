import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error404 from "./Error404";
import Header from "./Header";
import Product from "./product/Product";
import ProductDetailPage from "./product/ProductDetailPage";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <div className="list-none flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div> */}
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" Component={Contact} />
          <Route path="/product" Component={Product} />
          <Route path="/product-details/:id" Component={ProductDetailPage} />
          <Route path="*" Component={Error404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
