import React, { useEffect } from "react";
import { authData } from "./Auth";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ component }) {
  const auth = authData();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  });

  return (
    <>
      <h1>ProtectedRoute</h1>
      {component}
    </>
  );
}
