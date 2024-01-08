import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function ContactUs() {
  const navigate = useNavigate();
  let {name} = useParams();
  return (
    <>
      <h1>ContactUs</h1>
      <h2>{name} is ready to help you</h2>
      <Button onClick={() => navigate("/about")}>about</Button>
    </>
  );
}
