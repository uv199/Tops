import React from "react";
import { Button, Input } from "reactstrap";
import "./index.css";
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const loginHandler = () => {
    let jsonData = JSON.stringify({ name: "urvish" });
    localStorage.setItem("user", jsonData);
    navigate("/profile");
  };
  let data = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </div>
      <div>
        <User
          className="me-3"
          role="button"
          onClick={() => navigate("/profile")}
        />
        {Object?.keys(data)?.length === 0 && (
          <Button color="danger" onClick={() => loginHandler()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
/*
["name"] => 1
[] => 0

*/
