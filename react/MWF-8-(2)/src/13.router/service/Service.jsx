import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <div className="d-flex gap-3 p-5">
        <Button
          className="w-100"
          color="danger"
          onClick={() => navigate("/service/car")}
        >
          Car
        </Button>
        <Button
          className="w-100"
          color="danger"
          onClick={() => navigate("/service/bike")}
        >
          Bike
        </Button>
      </div>
      <Outlet />
    </>
  );
}
