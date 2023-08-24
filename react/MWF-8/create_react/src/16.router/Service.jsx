import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Service() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Service Page</h1>
      <button onClick={() => navigate("/home")}>go to home</button>
      <Outlet />
    </>
  );
}
