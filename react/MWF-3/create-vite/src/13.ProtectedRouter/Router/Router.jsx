import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../ui/Pages/Home";
import About from "../ui/Pages/About";
import Header from "../ui/Componenets/Header/Header";
import Footer from "../ui/Componenets/Footer/Footer";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" Component={Home} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
