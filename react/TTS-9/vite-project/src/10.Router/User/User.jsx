import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function User() {
  const navigate = useNavigate();

  // to get params data from url
  const data = useParams();

  console.log("-----------  data----------->", data);
  return (
    <div>
      <h1>Hello {data?.name}</h1>
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </div>
  );
}
