import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div className="flex justify-center gap-3 bg-gray-300 h-[50px] items-center w-[100vw] ">
      <NavLink to={"/"}>HOME</NavLink>
    </div>
  );
}
