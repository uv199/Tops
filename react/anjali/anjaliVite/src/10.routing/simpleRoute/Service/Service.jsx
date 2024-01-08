import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <Button onClick={() => navigate("/service/bike")}>Bike Service</Button>
      <Button onClick={() => navigate("/service/car")}>Car Service</Button>
      <Outlet />
    </>
  );
}
