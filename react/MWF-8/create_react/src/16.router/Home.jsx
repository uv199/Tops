import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
