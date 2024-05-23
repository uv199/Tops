import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { User } from "react-feather";
import { Button } from "reactstrap";
import { useCookies } from "react-cookie";

export default function Header() {
  let [cookie] = useCookies(["user"]);

  const navigate = useNavigate();
  return (
    <div className="flex justify-around gap-3 bg-gray-300 h-[50px] items-center w-[100vw] ">
      <div className="flex gap-5">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        {/* if user login profile if logout login btn  */}
        {cookie?.user ? (
          <NavLink to={"/profile"}>
            <User />
          </NavLink>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </div>
    </div>
  );
}
