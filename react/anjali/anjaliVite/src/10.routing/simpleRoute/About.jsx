import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <Button onClick={() => navigate(-1)}>Go to Back</Button>
    </>
  );
}
