import React from "react";
import { Button, Input } from "reactstrap";
import "./header.css";
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useCookies } from "react-cookie";

export default function Header() {
  const navigate = useNavigate();
  let [cookie, setCookie] = useCookies(["user", "token"]);
  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div">
        {cookie?.user?.userType !== "admin" ? (
          <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/admin-dashbord"}>Dashboard</NavLink>
            <NavLink to={"/admin-user"}>User</NavLink>
            <NavLink to={"/admin-order"}>Order</NavLink>
            <NavLink to={"/admin-product"}>Product</NavLink>
          </>
        )}
      </div>
      <div>
        {cookie?.token ? (
          <User
            className="me-3"
            role="button"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <Button color="danger" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
