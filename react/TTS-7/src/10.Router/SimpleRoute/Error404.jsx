import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1>Error404</h1>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}
