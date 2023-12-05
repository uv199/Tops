import React from "react";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import NavBar from "./NavBar";
import CarService from "./CarService";
import BikeService from "./BikeService";
import Product from "./Product/Product";
import SingleProduct from "./Product/SingleProduct";
import AllProduct2 from "./Product2/AllProduct2";
import Footer from "./Product2/Footer";
import SingleProduct2 from "./Product2/SingleProduct2";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          {/*  to make nested route use opning and closing tag and wrap child route in them  note : not use '/' in child like "/bike"-> "bike" */}
          <Route path="/service">
            {/*  index route */}
            <Route index path="" element={<Service />} />
            <Route path="car" element={<CarService />} />
            <Route path="bike" element={<BikeService />} />
          </Route>
          <Route path="/contact" Component={Contact} />
          <Route path="/product" Component={AllProduct2} />
          <Route path="/product/:id" Component={SingleProduct2} />

          {/* <Route path="/product" Component={Product} /> */}
          {/* <Route path="/product/:id" Component={SingleProduct} /> */}
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

/*
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/car" element={<CarService />} />
          <Route path="/service/bike" element={<BikeService />} />
          <Route path="/contact" Component={Contact} />
          // to give deault page it will show when user give invalid path
          <Route path="*" Component={PageNotFound} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
*/
/*
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        </BrowserRouter>
        </>
      );
    }
    */
