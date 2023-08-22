import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate("/")}>go to home</button>
      <button onClick={() => navigate("/service")}>go to service</button>
      <button onClick={() => navigate("/service/bike")}>
        go to bike service
      </button>
    </>
  );
}
