import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact</h1>
      <Button color="danger" onClick={() => navigate("/")}>
        Go to Home
      </Button>
      <Button color="danger" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </>
  );
}
