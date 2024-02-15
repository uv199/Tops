import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ Componenet }) => {
  const navigate = useNavigate();
  // check user is login or not
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (!normalData) {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};
export const AdminProtected = ({ Componenet }) => {
  const navigate = useNavigate();
  // check user is login or not
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    console.log("----->", normalData?.userType !== "admin");

    if (!normalData || normalData?.userType !== "admin") {
      toast.warn("You are not Admin");

      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

/*
home to all 
superAdmin - admin + superAdmin
admin - employee + admin
employee - user + employee
user - profile
*/
