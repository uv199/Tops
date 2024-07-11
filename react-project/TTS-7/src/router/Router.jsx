import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Files
import Product from "../ui/pages/admin/AdminProduct/Product";
import Collection from "../ui/pages/user/Collection/Collection";
import QuickView from "../ui/componenet/QuickView/QuickView";
import Header from "../ui/componenet/Header/Header";
import Footer from "../ui/componenet/Footer/Footer";
import Login from "../ui/pages/auth/Login/Login";
import Register from "../ui/pages/auth/Register/Register";
import DataForm from "../ui/pages/auth/Register/DataForm";
import ProductForm from "../ui/pages/admin/AdminProduct/ProductForm";
const Profile = lazy(() => import("../ui/pages/user/Profile/Profile"));
const Home = lazy(() => import("../ui/pages/user/Home/Home"));
import Cart from "../ui/pages/user/Cart/Cart";
import { AuthRoute } from "./Protected";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <CookiesProvider>
          <Header />
          <Suspense fallback={<h1>Loading...!</h1>}>
            <Routes>
              {/* ---------COMMONN-------- */}
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />


              {/* ---------ADMIN-------- */}
              <Route path="/admin-product" element={<Product />} />
              <Route path="/admin-product/create" element={<ProductForm />} />

              {/* ---------AUTH-------- */}
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={<AuthRoute Component={<Profile />} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/react-form" element={<DataForm />} />

              {/* ---------USER-------- */}
            </Routes>
          </Suspense>
          <Footer />
        </CookiesProvider>
      </BrowserRouter>
    </>
  );
}
