import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <button onClick={() => navigate("/service/car")}>
        go to car service
      </button>
      <button onClick={() => navigate("/service/bike")}>
        go to bike service
      </button>
      <button onClick={() => navigate(-1)}>go to back</button>

      {/* <Outlet /> */}
    </>
  );
}
