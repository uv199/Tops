import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ component }) {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("isLogin");
    console.log("-----------  data----------->", data);
    if (!data) {
      navigate("/");
    }
  });

  return <div>{component}</div>;
}
