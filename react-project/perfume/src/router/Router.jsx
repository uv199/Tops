import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/Home/Home";
import Header from "../ui/component/Header/Header";
import Login from "../ui/pages/Auth/Signin/Login";
import SignUp from "../ui/pages/Auth/Register/Register";
import Account from "../ui/pages/Profile/Profile";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
