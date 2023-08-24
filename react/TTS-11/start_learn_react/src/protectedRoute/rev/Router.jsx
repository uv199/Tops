import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Button } from "react-bootstrap";
import ProCom from "./ProCom";

export default function Router() {
  let [isLogin, setIsLogin] = useState(false);
  function login() {
    localStorage.setItem("login", true);
    setIsLogin(true);
  }
  function LogOut() {
    localStorage.removeItem("login");
    setIsLogin(false);
  }
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
        <li>
          {isLogin ? (
            <Button onClick={() => LogOut()} variant="primary">
              Log-Out
            </Button>
          ) : (
            <Button onClick={() => login()} variant="primary">
              Log-in
            </Button>
          )}
        </li>
      </ul>
      {/* <AuthContext> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/about"}
          element={<ProCom components={<About />} isLogin={isLogin} />}
        />
      </Routes>
      {/* </AuthContext> */}
      {/* </BrowserRouter> */}
    </>
  );
}
