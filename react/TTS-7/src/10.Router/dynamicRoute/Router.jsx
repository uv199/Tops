import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import ProductDetailPage from "./ProductDetailPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
