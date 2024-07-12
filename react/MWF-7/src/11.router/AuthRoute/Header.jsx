import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { LogIn, User } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-gray-300 list-none flex py-3 px-10 justify-between">
      <div className="flex gap-3 ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/admin"}>Admin</NavLink>
      </div>
      <div className="flex gap-3 ">
        <NavLink to={"/profile"}>
          <User />
        </NavLink>
        <NavLink to={"/login"}>
          <LogIn />
        </NavLink>
      </div>
    </div>
  );
}
