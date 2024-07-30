import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center flex-col min-w-[100vw] min-h-[100vh] bg-red-500">
      <div>
        <h1 className="text-3xl">Error404</h1>
        <Button onClick={()=>navigate("/")}>Back to home</Button>
        <Button onClick={()=>navigate(-1)}>Back to Last page</Button>
      </div>
    </div>
  );
}
