import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function AuthRoute({ component }) {
  const loginUser = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.stringify(loginUser) === "{}") {
      navigate("/login");
    } // "{}"
  }, [component]);
  return <>{component}</>;
}

export function AdminAuth({ component }) {
  const loginUser = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginUser?.userType !== "admin") {
      toast.error("You are not authenticated to accces this page");
      navigate(-1);
    } // "{}"
  }, [component]);
  return <>{component}</>;
}
