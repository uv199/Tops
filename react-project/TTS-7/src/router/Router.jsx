import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

// Components
import Header from "@component/Header/Header";
import Footer from "@component/Footer/Footer";
import {
  AdminAuth,
  AuthRoute,
} from "../ui/pages/auth/ProtectedRoute/Auth";
import AdminHeader from "@component/Header/AdminHeader";
import RoutesArray from "./App";
import Error from "../ui/pages/Error/Error"; // Assuming you have an Error component

export default function AppRouter() {
  const [cookies] = useCookies(["token", "user"]);

  return (
    <BrowserRouter>
      <CookiesProvider>
        <Suspense fallback="Loading">
          {cookies?.user?.userType === "admin" ? <AdminHeader /> : <Header />}
          <Routes>
            {RoutesArray.map((route, index) => {
              switch (route.type) {
                case "unauth":
                  return (
                    <Route
                      key={"route" + index}
                      path={route.path}
                      element={<route.component />}
                      exact={true}
                    />
                  );
                case "auth":
                  return (
                    <Route
                      key={"route" + index}
                      path={route.path}
                      element={<AuthRoute Component={route.component} />}
                      exact={true}
                    />
                  );
                case "admin":
                  return (
                    <Route
                      key={"route" + index}
                      path={route.path}
                      element={<AdminAuth Component={route.component} />}
                      exact={true}
                    />
                  );
                default:
                  return null; // Handle other cases if necessary
              }
            })}
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Suspense>
      </CookiesProvider>
    </BrowserRouter>
  );
}
