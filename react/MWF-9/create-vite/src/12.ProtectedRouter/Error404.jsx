import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Error404</h1>
        <p>Page not found....!</p>
        <Button onClick={() => navigate("/")} color="danger">
          Back to Home
        </Button>
        <Button onClick={() => navigate(-1)} color="danger">
          Back to prv page
        </Button>
      </div>
    </>
  );
}
