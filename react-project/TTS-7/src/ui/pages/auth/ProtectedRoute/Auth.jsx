import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function AuthRoute({ Component }) {
  let [cookies] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies?.user) {
      return navigate("/login");
    }
  },[]);
  return <><Component/></>;
}
export function AdminAuth({ Component }) {
  let [cookies] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies?.user && cookies?.user?.userType !== "admin") {
      return navigate("/login");
    }
  },[]);
  return <><Component/></>;
}
