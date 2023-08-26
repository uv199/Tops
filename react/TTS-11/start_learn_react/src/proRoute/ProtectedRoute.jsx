import React, { useEffect } from "react";
import { userAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute({ component }) {
  let { user } = userAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return <>{component}</>;
}
