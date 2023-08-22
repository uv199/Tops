import React from "react";
import { useNavigate } from "react-router-dom";

export default function BikeService() {
  const navigate = useNavigate();
  return (
    <>
      <h1>BikeService</h1>
      <button onClick={() => navigate(-1)}>go to back</button>
    </>
  );
}
