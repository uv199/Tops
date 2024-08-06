import { Button } from "@material-tailwind/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Error404() {
  let navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };

  const moveToPreviousPage = () => {
    navigate(-1)
  };
  return (
    <div className="min-h-screen bg-red-400 min-w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-5xl">Error404</h1>
      <Button className="my-4" onClick={() => moveToHome()}>
        Back to home page
      </Button>
      <Button onClick={() => moveToPreviousPage()}>
        Back to previous page
      </Button>
    </div>
  );
}
