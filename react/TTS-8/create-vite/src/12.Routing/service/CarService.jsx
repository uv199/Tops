import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function CarService() {
  const navigate = useNavigate();
  function navigateToService() {
    navigate("/service");
  }
  return (
    <>
      <h1>CarService</h1>
      <Button color="danger" onClick={() => navigateToService()}>
        back to service
      </Button>
    </>
  );
}
