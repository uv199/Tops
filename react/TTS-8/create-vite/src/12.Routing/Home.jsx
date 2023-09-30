import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();
  function backHandler() {
    navigate(-1);
    console.log("----");
  }
  return (
    <>
      <h1>Home</h1>
      <Button color="danger" onClick={() => backHandler()}>
        Back
      </Button>
    </>
  );
}
