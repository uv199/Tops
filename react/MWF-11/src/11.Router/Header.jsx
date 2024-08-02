import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div className="flex h-[50px] list-none justify-center gap-4 border-b-2 border-black">
      <NavLink className="flex justify-center items-center px-3" to={"/"}>
        Home
      </NavLink>
      <NavLink className="flex justify-center items-center px-3" to={"/about"}>
        About
      </NavLink>
      <NavLink className="flex justify-center items-center px-3" to={"/login"}>
        Login
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
