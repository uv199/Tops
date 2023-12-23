import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column ">
      <h1>Home</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
