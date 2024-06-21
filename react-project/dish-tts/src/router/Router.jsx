import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Best_Sellers from "../ui/page/Best_Sellers";
import New_arrivals from "../ui/page/New_arrivals";
import Oversized_tshirts from "../ui/page/Oversized_tshirts";
import All_categories from "../ui/page/All_categories";
import Merchandise from "../ui/page/Merchandise";
import Header from "../ui/components/Header";
import Home from "../ui/page/Home";
import Footer from "../ui/components/Footer";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Best_Sellers" element={<Best_Sellers />} />
          <Route path="/New_arrivals" element={<New_arrivals />} />
          <Route path="/Oversized_tshirts" element={<Oversized_tshirts />} />
          <Route path="/All_categories" element={<All_categories />} />
          <Route path="/Merchandise" element={<Merchandise />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
