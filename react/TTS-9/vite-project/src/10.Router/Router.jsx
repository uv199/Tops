import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          {/* <Routes>
          <Route path="/contact/2" element={<Home />} />
        </Routes> */}
        </div>
      </BrowserRouter>
    </>
  );
}
