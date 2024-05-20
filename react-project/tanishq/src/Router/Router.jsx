import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header/Header";
import Home from "../UI/Page/User/Home/Home";
import Gold from "../UI/Page/User/Gold/Gold";
import Diamond from "../UI/Page/User/Diamond/Diamond";
import Errings from "../UI/Page/User/Errings/Errings";
import Rings from "../UI/Page/User/Rings/Rings";
import Collection from "../UI/Page/User/Collections/Collection";
import Wedding from "../UI/Page/User/Wedding/Wedding";
import Gifting from "../UI/Page/User/Gifting/Gifting";
import GoldenHarvest from "../UI/Page/User/GoldenHarvest/GoldenHarvest";
import More from "../UI/Page/User/More/More";
import JewelleryPage from "../UI/Page/User/JewelleryPage/JewelleryPage";
import Footer from "../UI/Component/Footer/Footer";
import PageNotFound from "./PageNotFound";
import ProfilePage from "../UI/Page/User/ProfilePage/ProfilePage";
import WishList from "../UI/Page/User/WishList/WishList";
import Login from "../UI/Page/User/Login/Login";
import Register from "../UI/Page/User/Register/Register";
import CartPage from "../UI/Page/User/Cart/CartPage";
import { CookiesProvider } from "react-cookie";
import { AdminProtected, LoginProtected, ProtectRouter } from "./ProtectRouter";
import ProductCom from "../UI/Page/Admin/Product/ProductCom";
import UserCom from "../UI/Page/Admin/User/UserCom";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewellery/:type" element={<JewelleryPage />} />

            <Route
              path="/profilePage"
              element={<ProtectRouter Component={<ProfilePage />} />}
            />
            <Route
              path="/wishList"
              element={<ProtectRouter Component={<WishList />} />}
            />
            <Route
              path="/login"
              element={<LoginProtected Component={<Login />} />}
            />
            <Route
              path="/register"
              element={<LoginProtected Component={<Register />} />}
            />
            <Route path="/cartpage" element={<CartPage />} />
            <Route
              path="/product"
              element={<AdminProtected Component={<ProductCom />} />}
            />
            <Route
              path="/Userlist"
              element={<AdminProtected Component={<UserCom />} />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
}
