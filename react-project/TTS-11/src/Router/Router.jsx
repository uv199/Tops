import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/user/Home/Home";
import Header from "../ui/componanets/Header/Header";
import Footer from "../ui/componanets/Footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
