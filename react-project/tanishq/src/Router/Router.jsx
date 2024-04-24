import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header/Header";
import Home from "../UI/Page/User/Home/Home";
import Profile from "../UI/Page/User/Profile/Profile";
import All_Jewellery from "../UI/Page/User/All-Jewellery/All_Jewellery";
import Footer from "../UI/Page/User/Footer/Footer";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jewellery" element={<All_Jewellery />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
