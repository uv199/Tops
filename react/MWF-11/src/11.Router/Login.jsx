import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const loginHandler = () => {
    localStorage.setItem("login", JSON.stringify(true));
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-purple-300 min-w-[100vw] flex flex-col justify-center gap-2 items-center">
      <h1 className="text-5xl">Login</h1>
      <Button onClick={() => loginHandler()}>Login</Button>
    </div>
  );
}
