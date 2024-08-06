import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../ui/pages/Register/Register";
import Home from "../ui/pages/Home/Home";
import Header from "../ui/components/Header/Header";
import User from "../ui/pages/User/User";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
