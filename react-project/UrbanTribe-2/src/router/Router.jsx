import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../ui/pages/Register/Register";
// import Home from "../ui/pages/Home/Home";
const Home = lazy(() => import("../ui/pages/Home/Home"));
import Header from "../ui/components/Header/Header";
import User from "../ui/pages/User/User";
import Product from "../ui/pages/Product/Product";
import ProductForm from "../ui/pages/Product/ProductForm";
import Loading from "../ui/pages/Loading";
import { Footer } from "flowbite-react";
import Login from "../ui/pages/Login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin-product" element={<Product />} />
          <Route path="/admin-product/create" element={<ProductForm />} />
          <Route path="/admin-product/update" element={<ProductForm />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
