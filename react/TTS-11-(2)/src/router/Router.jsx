import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../13.Project/ui/Contact/Contact";
import About from "../13.Project/ui/About/About";
import Home from "../13.Project/ui/Home/Home";
import Header from "../13.Project/componenet/Header/Header";
import Login from "../13.Project/ui/Login/Login";
import Profile from "../13.Project/ui/Profile/Profile";
import AuthRoute from "./AuthRoute";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<AuthRoute Componenet={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
let data = {
  name: "urvish",
  userType: "customer",
  email: "uvpatel199@gmail.com",
  number: "1213",
  password: "$2b$12$PacRV2/uM1tGVoEO.sZYNOtawyRhRcKMF1Blf9Y8WijRA9DJnO.IK",
  age: 12,
  address: [
    {
      add: "wefwsdvwfe",
      city: "surat",
      state: "gujarat",
      pinCode: "395007",
    },
  ],
};
