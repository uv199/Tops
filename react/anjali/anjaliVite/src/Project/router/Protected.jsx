import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminProtected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginUser") || "{}");
    console.log("admin", data);
    if (data.userType !== "admin") {
      toast.warn("You are not Authenticated");
      localStorage.clear();
      navigate("/login");
    }
  });
  console.log("-----------  children----------->", children);
  return <div>{children}</div>;
};

export const ProtectRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("token");
    const data = jsonData ? JSON.parse(jsonData) : "";
    if (!data) {
      navigate("/login");
    }
  });
  return <div>{Component}</div>;
};




// 3 page =
// superadmin => all 3 page 
// admin => admin user 2 page 
// user => only user page 1 page
