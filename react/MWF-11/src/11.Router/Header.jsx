import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  let data = JSON.parse(localStorage.getItem("login"));

  return (
    <div className="flex h-[50px] list-none justify-center gap-4 border-b-2 border-black">
      <NavLink className="flex justify-center items-center px-3" to={"/"}>
        Home
      </NavLink>
      <NavLink className="flex justify-center items-center px-3" to={"/about"}>
        About
      </NavLink>
      <NavLink className="flex justify-center items-center px-3" to={"/product"}>
        Product
      </NavLink>
      {!data && (
        <NavLink
          className="flex justify-center items-center px-3"
          to={"/login"}
        >
          Login
        </NavLink>
      )}
      <NavLink className="flex justify-center items-center px-3" to={"/cart"}>
        <ShoppingCart />
      </NavLink>
      <NavLink
        className="flex justify-center items-center px-3"
        to={"/profile"}
      >
        Profile
      </NavLink>
    </div>
  );
}
