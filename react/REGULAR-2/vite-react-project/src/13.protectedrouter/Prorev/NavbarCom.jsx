import React from "react";
import { NavLink } from "react-router-dom";
import { authData } from "./Auth";

export default function NavbarCom() {
  const auth = authData();
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}> Home</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}> Profile</NavLink>
        </li>
        {!auth?.user && (
          <li>
            <NavLink to={"/login"}> Login</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
