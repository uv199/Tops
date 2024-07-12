import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-yellow-400 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Home</h1>
      </div>
    </div>
  );
}
