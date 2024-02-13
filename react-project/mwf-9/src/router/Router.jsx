import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/comman/Home/Home";
import Contact from "../ui/pages/comman/Contact";
import About from "../ui/pages/comman/About/About";
import { Provider } from "react-redux";
import store from "../redux/app/store";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}
