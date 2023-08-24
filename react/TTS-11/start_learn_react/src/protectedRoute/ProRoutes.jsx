import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProRoutes({ components }) {
  let navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("userLogin");
    if (!isLogin) {
      navigate("/login");
    }
  });
  return <>{components}</>;
}
