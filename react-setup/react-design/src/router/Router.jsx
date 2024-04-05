import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Files
import Product from "../ui/pages/admin/AdminProduct/Product";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          {/* <Header /> */}
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
            <Route path="/" element={<Product />} />

            {/* ---------USER-------- */}
            {/* <Route path="/order" element={<UserOrder />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
          </Routes>
          {/* <Footer /> */}
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
