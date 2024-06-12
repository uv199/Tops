import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error404</h1>
      <Button onClick={() => navigate(-1)}>Go to back</Button>
    </>
  );
}
