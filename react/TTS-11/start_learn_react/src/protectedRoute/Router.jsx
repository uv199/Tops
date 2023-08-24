import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import LogOut from "./LogOut";
import AuthContext from "./AuthContext";
import ProRoutes from "./ProRoutes";

export default function Router() {
  let [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    let x = localStorage.getItem("userLogin");
    setUserLogin(x);
  });
  return (
    <>
      {/* <BrowserRouter> */}
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        {userLogin ? (
          <li>
            <NavLink to={"/logout"}>logOut</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
        )}
      </ul>
      {/* <AuthContext> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<ProRoutes components={<About />} />} />
        <Route
          path={"/login"}
          element={<Login setUserLogin={setUserLogin} />}
        />
        <Route
          path={"/logout"}
          element={<LogOut setUserLogin={setUserLogin} />}
        />
      </Routes>
      {/* </AuthContext> */}
      {/* </BrowserRouter> */}
    </>
  );
}
