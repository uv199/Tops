import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import "./header.css";
import { Search } from "react-bootstrap-icons";
import { CircleUserRound } from "lucide-react";

export default function HeaderCom() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("loginUser") || "{}");
  console.log("-----------  data----------->", data);

  return (
    <div className="header_div">
      <h1>PUMA</h1>
      <h3>{data.email}</h3>
      {data.userType === "admin" ? (
        <div className="list_div">
          <li>
            <NavLink to={"/dashbord"}>DashBord</NavLink>
          </li>
          <li>
            <NavLink to={"product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"user"}>User</NavLink>
          </li>
        </div>
      ) : (
        <div className="list_div">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"shop"}>Shop</NavLink>
          </li>
        </div>
      )}

      <div className="d-flex align-items-center">
        <Input placeholder="search your text here" />
        <Search size={"25px"} color="light" className="ms-2" />
        {localStorage?.getItem("token") ? (
          <CircleUserRound
            size={"40"}
            role="button"
            color="black"
            onClick={() => navigate("/profile")}
            className="ms-3"
          />
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="ms-2"
            color="danger"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
