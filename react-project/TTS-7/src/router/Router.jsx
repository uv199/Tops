import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Files
import Product from "../ui/pages/admin/AdminProduct/Product";
import Collection from "../ui/pages/user/Collection/Collection";
import QuickView from "../ui/componenet/QuickView/QuickView";
import Header from "../ui/componenet/Header/Header";
import Footer from "../ui/componenet/Footer/Footer";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Header />
          <Routes>
            {/* ---------COMMONN-------- */}
            {/* 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} /> */}

            {/* ---------ADMIN-------- */}

            {/* <Route path="/admin-dashbord" element={<Dashbord />} />
              <Route path="/admin-order" element={<Order />} />
              <Route path="/admin-user" element={<User />} /> */}
            {/* <Route path="/" element={<Product />} /> */}

            {/* ---------USER-------- */}
            <Route path="/collection" element={<Collection />} />
            <Route path="/product" element={<QuickView />} />
          </Routes>
          <Footer />
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
