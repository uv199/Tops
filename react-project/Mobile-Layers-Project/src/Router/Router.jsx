import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../Redux/App/Store";
import DashBoard from "../UI/Pages/Admin/DashBoard/DashBoard";
import Product from "../UI/Pages/Admin/Product/Product";
import Order from "../UI/Pages/Admin/Order/Order";
import User from "../UI/Pages/Admin/User/User";
import ProtectedRouter, { ProtectedRouteUser } from "./ProtectedRouter";
import Header from "../UI/Components/Header/Header";
import Footer from "../UI/Components/Footer/Footer";
import Home from "../UI/Pages/Common/Home/Home";
import ForgotPassword from "../UI/Pages/Auth/Forgot/ForgotPassword";
import TrackOrder from "../UI/Pages/User/TrackOrder/TrackOrder";
import SelectBrand from "../UI/Pages/Common/Home/Collection/SelectBrand/SelectBrand";
import About from "../UI/Pages/Common/About/About";
import Contact from "../UI/Pages/Common/Contact/Contact";
import TermsAndCondition from "../UI/Pages/Common/TermsAndCondition/TermsAndCondition";
// import PrivacyPolicy from '../UI/Pages/Common/PrivacyPolicy/PrivacyPolicy'
import Refunds from "../UI/Pages/Common/Refunds/Refunds";
import Collection from "../UI/Pages/Common/Home/Collection/Collection";
import LaptopCollect from "../UI/Pages/Common/Home/Collection/LaptopCollect";
import LayerCollection from "../UI/Pages/Common/Home/Collection/LayerCollection";
import AllBrand from "../UI/Pages/Common/Home/Collection/SelectBrand/AllBrand/AllBrand";
import Login from "../UI/Pages/Auth/Login/Login";
import SignUp from "../UI/Pages/Auth/SignUp/SignUp";
import Error from "../UI/Pages/Error/Error";
import Profile from "../UI/Pages/Common/Profile/Profile";
import FAQ from "../UI/Pages/Common/FAQ/FAQ";
import AllBrandDetails from "../UI/Pages/Common/Home/Collection/SelectBrand/AllBrand/AllBrandDetails";
import HowToApply from "../UI/Pages/Common/HowToApply/HowToApply";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <Routes>
            {/* ============== User ============ */}
            <Route path="/" Component={Home} />
            <Route path="/forgotPassword" Component={ForgotPassword} />
            <Route
              path="/trackorder"
              element={<ProtectedRouteUser ComponentUser={<TrackOrder />} />}
            />
            <Route path="/apply" Component={HowToApply} />
            <Route path="/brand" element={<SelectBrand />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tandc" Component={TermsAndCondition} />
            {/* <Route path='/privacy-policy' Component={PrivacyPolicy} /> */}
            <Route path="/refunds" Component={Refunds} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/collection" Component={Collection} />
            <Route path="/collect" Component={LaptopCollect} />
            <Route path="/layercollect" Component={LayerCollection} />
            <Route path="/mobile" Component={AllBrand} />
            <Route path="/productDetail/:id" Component={AllBrandDetails} />

            {/* ============== Common ============ */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" Component={SignUp} />
            <Route
              path="/profile"
              element={<ProtectedRouteUser ComponentUser={<Profile />} />}
            />

            {/* ============== Admin ============ */}
            <Route
              path="/dashboard"
              element={<ProtectedRouter Component={<DashBoard />} />}
            />
            <Route
              path="/admin-product"
              element={<ProtectedRouter Component={<Product />} />}
            />
            <Route
              path="/order"
              element={<ProtectedRouter Component={<Order />} />}
            />
            <Route
              path="/user"
              element={<ProtectedRouter Component={<User />} />}
            />

            {/* ============== Error ============ */}
            <Route path="*" Component={Error} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
