import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-500">
      <div className="flex justify-between">
        <h1 className="font-bold p-3 text-3xl">LOGO</h1>
        <div className="flex gap-4 text-2xl underline p-3 uppercase">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
        </div>
        <div className="p-3">
          <NavLink to={"/login"}>
            <Button>Log-In/Sign-Up</Button>
          </NavLink>
          <NavLink to={"/profile"}>
            <Button>Profile</Button>
          </NavLink>
          <NavLink to={"/login_2"}>
            <Button>Login_2</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
