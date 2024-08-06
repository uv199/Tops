import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-brown-400 min-w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-5xl">Profile</h1>
      <Button onClick={logoutHandler}>LogOut</Button>
    </div>
  );
}
