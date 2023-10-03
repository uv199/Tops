import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRoute(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (true) {
      navigate("/login");
    }
  });
  return (
    <>
      <h1>AuthRoute</h1>
      {props.component}
    </>
  );
}
