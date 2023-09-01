import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "./Auth";

export default function NavBar() {
  let [loginUser, setLoginUser] = useState(null);
  const { user } = authUser();
  // console.log("🚀 ~ file: NavBar.jsx:8 ~ NavBar ~ auth:", auth);

  return (
    <>
      <ul className="d-flex gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        {!user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
