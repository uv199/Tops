import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Auth";

export default function NavBar() {
  let [loginUser, setLoginUser] = useState(null);
  const { getUser } = useContext(AuthContext);
  useEffect(() => {
    let x = getUser();
    setLoginUser(x);
  });
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
        {!loginUser && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
