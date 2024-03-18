import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/comman/Home/Home";
import SingleProduct from "../ui/pages/comman/SingleProduct/SingleProduct";
import Header from "../ui/components/Header/Header";
import Footer from "../ui/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { CookiesProvider } from "react-cookie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </Provider>
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
