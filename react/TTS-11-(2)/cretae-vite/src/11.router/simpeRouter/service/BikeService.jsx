import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function BikeService() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>BikeService</h1>
      <Button color="danger" onClick={() => navigate("/service")}>
        Go to service
      </Button>
    </div>
  );
}
