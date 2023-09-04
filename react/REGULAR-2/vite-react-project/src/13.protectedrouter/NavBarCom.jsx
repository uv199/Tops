import React from "react";
import { NavLink } from "react-router-dom";
import { userAuth } from "./Auth";
import { Button } from "react-bootstrap";
export default function NavBarCom() {
  const auth = userAuth();
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}> Home</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}> Profile</NavLink>
        </li>
        <li>
          {auth.user ? (
            <Button
              onClick={() => auth.LogOut()}
              className="mt-3 p-2"
              variant="dark"
            >
              logOut
            </Button>
          ) : (
            <NavLink to={"/login"}> Login</NavLink>
          )}
        </li>
      </ul>
    </>
  );
}
