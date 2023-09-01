import React, { useContext, useEffect } from "react";
import { authUser } from "./Auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtedRoute({ components }) {
  const { user } = authUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return <>{components}</>;
}
