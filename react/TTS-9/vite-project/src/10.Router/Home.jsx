import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </>
  );
}
