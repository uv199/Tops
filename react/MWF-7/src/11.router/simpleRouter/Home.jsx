import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-yellow-400 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Home</h1>
        <Button onClick={() => navigate("/product")}>
          Move to Product Page
        </Button>
      </div>
    </div>
  );
}
