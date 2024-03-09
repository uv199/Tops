import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ width: "100%" }}
    >
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ width: "300px", minHeight: "500px" }}
      >
        <h1>Error404</h1>
        <Button color="danger" onClick={() => navigate(-1)}>
          Go to back
        </Button>
      </div>
    </div>
  );
}
