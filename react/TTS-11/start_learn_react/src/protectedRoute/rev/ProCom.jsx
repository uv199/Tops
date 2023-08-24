import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProCom({ components, isLogin }) {
  let navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("login");
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);
  return <>{components}</>;
}
