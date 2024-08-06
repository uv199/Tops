import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/Home/Home";
import Header from "../ui/component/header/Header";
import Login from "../ui/pages/auth/login/Login";
import Register from "../ui/pages/auth/register/Register";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*------- common ----------*/}
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/collection/:type" Component={Home} />
          <Route path="/product/:id" Component={Home} />

          {/*------- auth ----------*/}
          <Route path="/profile" Component={Home} />
          <Route path="/cart" Component={Home} />
          <Route path="/wishlist" Component={Home} />

          {/*------- admin ----------*/}
          <Route path="/admin/dashboard" Component={Home} />
          <Route path="/admin/product" Component={Home} />
          <Route path="/admin/product/create" Component={Home} />
          <Route path="/admin/order" Component={Home} />
          <Route path="/admin/user" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
