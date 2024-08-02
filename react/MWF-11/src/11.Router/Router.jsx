import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import Error404 from "./Error404";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="flex py-3 list-none justify-center gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </div> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
