import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function AuthRoute({ Component }) {
  let [cookies] = useCookies(["user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies?.user) {
      return navigate("/login");
    }
  });
  return <>{Component}</>;
}

export function AdminRoute({ Component }) {
  let [cookies] = useCookies(["user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.user.email !== "admin@admin.com") {
      return navigate("/login");
    }
  });
  return <>{Component}</>;
}
