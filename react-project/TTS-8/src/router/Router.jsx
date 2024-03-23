import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../ui/pages/Home/Home";
import Footer from "@component/Footer/Footer";
import Error404 from "../ui/pages/Error404/Error404";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import Profile from "../ui/pages/Profile/Profile";
import Contact from "../ui/pages/Contact/Contact";
import About from "../ui/pages/About/About";
import Dashboard from "../ui/pages/Admin/Dashboard/Dashboard";
import User from "../ui/pages/Admin/Users/User";
import Order from "../ui/pages/Admin/Order/Order";
import AllProduct from "../ui/pages/Admin/AllProduct/AllProduct";
import { AuthRoute } from "./ProtectedRoute";
import AllShose from "../ui/pages/Shose/AllShose";
import ShoseDetail from "../ui/pages/Shose/ShoseDetail";
import Header from "../ui/components/Header/Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="shose-all" element={<AllShose />} />
            <Route path="shose/:id" element={<ShoseDetail />} />

            <Route
              path="dashboard"
              element={<AuthRoute Component={<Dashboard />} />}
            />
            <Route path="users" element={<User />} />
            <Route path="order" element={<Order />} />
            <Route path="admin-product" element={<AllProduct />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
