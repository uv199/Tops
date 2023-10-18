import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("user");
    console.log("data", data);
    let normalData = JSON.parse(data);
    console.log("normalData", normalData);
    if (!normalData) {
      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
}
