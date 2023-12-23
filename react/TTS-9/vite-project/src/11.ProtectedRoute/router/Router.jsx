import React from "react";
import Home from "../ui/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../ui/pages/Error404";
import HeaderRS from "../ui/cmponenets/HeaderRS";

export default function ProtectedRouter() {
  return (
    <>
      <BrowserRouter>
        <HeaderRS expand="lg" />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
