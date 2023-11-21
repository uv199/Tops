import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../ui/pages/Home/Home";
import Header from "../ui/components/Header/Header";
import Footer from "../ui/components/Footer/Footer";
import Product from "../ui/pages/Product/Product";
import Error404 from "../ui/pages/Error404/Error404";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
