import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRoute({ Componenet }) {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login-user");
    let normalData = JSON.parse(jsonData);
    if (!normalData) navigate("/login");
  }, []);
  return <div>{Componenet}</div>;
}
