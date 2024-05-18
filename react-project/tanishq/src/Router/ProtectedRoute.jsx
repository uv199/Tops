import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ Component }) {
  const [cookies, setCookie] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) return navigate("/login");
  });
  return <div>{Component}</div>;
}

export function LoginProtected({ Component }) {
  const [cookies, setCookie] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.token) return navigate(-1);
  });
  return <div>{Component}</div>;
}

export function AdminProtected({ Component }) {
  const [cookies, setCookie, removeCookies] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies?.user?.userType !== "admin") {
      removeCookies("token");
      removeCookies("user");
      return navigate("/unauthorise");
    }
    return;
  });
  return <div>{Component}</div>;
}
