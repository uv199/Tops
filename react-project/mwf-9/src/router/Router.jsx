import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/comman/Home/Home";
import Contact from "../ui/pages/comman/Contact";
import About from "../ui/pages/comman/About/About";
import { Provider } from "react-redux";
import store from "../redux/app/store";
import Profile from "../ui/pages/comman/Profile/Profile";
import Signup from "../ui/pages/comman/Signup/Signup";
import Login from "../ui/pages/comman/Login/Login";
import Order from "../ui/pages/admin/Order/Order";
import Dashbord from "../ui/pages/admin/Dashbord/Dashbord";
import User from "../ui/pages/admin/User/User";
import UserOrder from "../ui/pages/user/UserOrder/UserOrder";
import Cart from "../ui/pages/user/Cart/Cart";
import AdminProduct from "../ui/pages/admin/AdminProduct/AdminProduct";
import Product from "../ui/pages/user/Product/Product";
import ProductDetailsPage from "../ui/pages/user/Product/ProductDetailsPage";
import Header from "../ui/componenet/Header/Header";
import Footer from "../ui/componenet/Footer/Footer";
import { CookiesProvider } from "react-cookie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Provider store={store}>
            <Header />
            <Routes>
              {/* ---------COMMONN-------- */}

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              {/* ---------ADMIN-------- */}

              <Route path="/admin-dashbord" element={<Dashbord />} />
              <Route path="/admin-order" element={<Order />} />
              <Route path="/admin-user" element={<User />} />
              <Route path="/admin-product" element={<AdminProduct />} />

              {/* ---------USER-------- */}
              <Route path="/order" element={<UserOrder />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
            </Routes>
            <Footer />
          </Provider>
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
