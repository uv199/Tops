import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { state: { loginModal: true } });
    }
  }, []);
  return <div>{Component}</div>;
};
