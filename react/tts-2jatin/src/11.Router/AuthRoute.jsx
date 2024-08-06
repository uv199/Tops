import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRoute({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("login");
    if (isLogin === "false") {
      navigate("/login");
    }
  });
  return <div>{Component}</div>;
}
