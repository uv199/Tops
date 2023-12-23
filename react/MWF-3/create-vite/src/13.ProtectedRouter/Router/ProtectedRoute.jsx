import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("user");
    let normalData = JSON.parse(data);

    if (normalData && Object.keys(normalData).length === 0) {
      navigate("/anauthorized");
    }
  });
  return <>{Component}</>;
};

export const AdminProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("user");
    let normalData = JSON.parse(data);
    console.log("normalData====>", normalData);
    if (
      (normalData && Object.keys(normalData).length === 0) ||
      normalData?.userType !== "Admin"
    ) {
      navigate("/anauthorized");
    }
  });
  return <>{Component}</>;
};
