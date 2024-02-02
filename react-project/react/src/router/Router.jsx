import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/Comman/Home";
import Login from "../ui/pages/Comman/Login/Login";
import HeaderCom from "../ui/componenet/Header/HeaderCom";
import Profile from "../ui/pages/Comman/Profile/Profile";
import Register from "../ui/pages/Comman/Register/Register";
import Dashbord from "../ui/pages/Admin/Dashbord/Dashbord";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
// import { AdminProtected, ProtectRoute } from "./Protected";

export default function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HeaderCom />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Home} />

          <Route path="/profile" element={<Profile />} />

          {/* -----Admin Route----- */}

          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
