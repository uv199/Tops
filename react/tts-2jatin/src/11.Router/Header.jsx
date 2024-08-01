import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { User } from "lucide-react";
export default function Header() {
  let data = localStorage.getItem("login");
  console.log("-----------  data----------->", data)
  const navigate = useNavigate();
  return (
    <div className="flex justify-around py-3">
      <ul className="flex  w-screen justify-around ">
        <div className="flex justify-evenly w-[65%]">
          <NavLink to={"/"}>Home </NavLink>
          <NavLink to={"/about"}>About</NavLink>
          {data === "false" || !data ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : null}
        </div>
        <div className=" flex justify-end w-[30%]">
          <User onClick={() => navigate("/profile")} />
        </div>
      </ul>
    </div>
  );
}
