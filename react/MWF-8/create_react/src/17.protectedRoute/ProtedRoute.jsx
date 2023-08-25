import React, { useContext, useEffect } from "react";
import { AuthContext } from "./Auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtedRoute({ components }) {
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    let user = getUser();
    if (!user) {
      navigate("/login");
    }
  });
  return <>{components}</>;
}
