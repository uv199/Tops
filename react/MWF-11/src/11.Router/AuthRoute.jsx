import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRoute({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonString = localStorage.getItem("login");
    let normalData = JSON.parse(jsonString);
    console.log("-----------  normalData----------->", normalData);
    if (!normalData) {
      navigate("/login");
    }
  });
  return <div>{Component}</div>;
}
