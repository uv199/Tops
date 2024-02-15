import React from "react";
import { Button } from "reactstrap";
import { useNavigate, Outlet } from "react-router-dom";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "darkgray",
          }}
          className="d-flex align-content-center p-3 gap-2"
        >
          <Button onClick={() => navigate("/service/car")}>Car</Button>
          <Button onClick={() => navigate("/service/bike")}>Bike</Button>
          <hr />
        </div>
        <h1>Service</h1>
      </div>
      <Outlet />
    </>
  );
}
