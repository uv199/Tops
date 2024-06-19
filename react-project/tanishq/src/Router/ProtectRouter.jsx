import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ProtectRouter({ Component }) {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) return navigate("/login");
  });
  return <div>{Component} </div>;
}

export function LoginProtected({ Component }) {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.token) return navigate(-1);
  });
  return <div>{Component}</div>;
}

export function AdminProtected({ Component }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies?.user?.userType !== "admin") {
      navigate("/UnauthorisePage");
      removeCookie("token");
      removeCookie("user");
    }
    return;
  });
  return <div>{Component}</div>;
}
