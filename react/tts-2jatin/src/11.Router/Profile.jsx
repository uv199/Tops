import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.setItem("login", false);
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center flex-col min-w-[100vw] min-h-[100vh] bg-purple-300">
      <div>
        <h1 className="text-3xl">Profile</h1>
        <Button onClick={() => logoutHandler()}>Logout</Button>
      </div>
    </div>
  );
}
