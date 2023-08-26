import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userAuth } from "./Auth";

export default function Navbar() {
  let auth = userAuth();
  return (
    <>
      <ul className=" d-flex gap-lg-5">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
        {!auth?.user && (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
