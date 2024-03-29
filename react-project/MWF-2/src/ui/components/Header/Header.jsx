import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [{ user, token }, setCookie] = useCookies(["user", "token"]);

  // register toggle
  const registerToggle = () => setRegisterModal(!registerModal);

  // login toggle
  const loginToggle = () => setLoginModal(!loginModal);
  const navigate = useNavigate();

  return (
    <>
      <div className="header_con">
        <h2>JustinTime</h2>
        <div className="link_div">
          {user?.userType === "admin" ? (
            <>
              <NavLink to={"/admin-dashbord"}>dashbord</NavLink>
              <NavLink to={"/admin-user"}>User</NavLink>
              <NavLink to={"/admin-product"}>Product</NavLink>
              <NavLink to={"/admin-order"}>Order</NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"about"}>About</NavLink>
            </>
          )}
        </div>
        <div>
          {token ? (
            <User
              className="me-3"
              role="button"
              onClick={() => navigate("/profile")}
            />
          ) : (
            <Button color="danger" onClick={() => loginToggle()}>
              Login
            </Button>
          )}
        </div>
      </div>
      {/* --------login modal--------- */}
      <LoginModal
        modal={loginModal}
        toggle={loginToggle}
        registerToggle={registerToggle}
      />
      {/* --------Register modal--------- */}
      <RegisterModal
        modal={registerModal}
        toggle={registerToggle}
        loginToggle={loginToggle}
      />
    </>
  );
}
/*
["name"] => 1
[] => 0

*/
