import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  let navigate = useNavigate();

  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/home")}>go to home</button>
    </>
  );
}
