import React from "react";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./index.css";
import Error404 from "./Error404";
import Header from "./Header";
import Service from "./Service/Service";
import BikeService from "./Service/BikeService";
import CarService from "./Service/CarService";
import Products from "../Products";
import ProductPage from "../ProductPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <ul className="d-flex gap-3">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name" Component={ContactUs} />
          <Route path="/service">
            <Route index Component={Service} />
            <Route path="bike" Component={BikeService} />
            <Route path="car" Component={CarService} />
          </Route>
          <Route path="*" Component={Error404} />
          <Route path="/product" Component={Products} />
          <Route path="/product/:id" Component={ProductPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
