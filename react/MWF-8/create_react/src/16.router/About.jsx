import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => navigate(-1)}>back</button>
    </>
  );
}
