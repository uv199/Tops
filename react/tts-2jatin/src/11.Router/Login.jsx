import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const LoginHandler = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center flex-col  min-w-[100vw] min-h-[100vh] bg-green-500">
      <div>
        <h1 className="text-3xl">Login</h1>
        <Button onClick={() => LoginHandler()}>Login</Button>
      </div>
    </div>
  );
}
