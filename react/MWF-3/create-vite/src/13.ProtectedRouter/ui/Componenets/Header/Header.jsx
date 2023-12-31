import React, { useState } from "react";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";
import Person from "./circle-user-round.svg";
import { Button } from "reactstrap";
import LoginModal from "../Modal/LoginModal";
import { toast } from "react-toastify";
import RegisetModal from "../Modal/RegisetModal";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const navigate = useNavigate();
  const regisetrToggle = () => {
    console.log("------>");
    setRegisterModal(!registerModal);
  };

  const loginToggle = () => setLoginModal(!loginModal);

  const data = JSON.parse(localStorage.getItem("user"));
  console.log("-----------  data----------->", data);

  const logoutHandler = () => {
    localStorage.setItem("user", JSON.stringify({}));
    setLoginModal(true);
    toast.success("logout successfully done..!");
    navigate("/");
  };

  return (
    <>
      <LoginModal
        toggle={loginToggle}
        modal={loginModal}
        regisetrToggle={regisetrToggle}
      />
      <RegisetModal toggle={regisetrToggle} modal={registerModal} />
      <header>
        <h1>UV</h1>
        <div className="w-100  d-flex justify-content-between align-items-center">
          <div className="linkContainer">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            {data?.userType === "Admin" && (
              <NavLink to={"/admin"}>Admin</NavLink>
            )}
          </div>
          <div>
            <NavLink to={"/profile"} className="me-2">
              <img style={{ fontWeight: "bold", fill: "white" }} src={Person} />
            </NavLink>
            {data && Object.keys?.(data)?.length > 0 ? (
              <Button
                className="me-4"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={logoutHandler}
              >
                LogOut
              </Button>
            ) : (
              <>
                <Button
                  className="me-4"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={loginToggle}
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
