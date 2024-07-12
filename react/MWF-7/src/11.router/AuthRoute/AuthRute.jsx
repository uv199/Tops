import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRute({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("userType");
    if (!data) {
      return navigate("/login");
    }
  });

  return Component;
}

export function AdminRute({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("userType");
    if (data !== "admin") {
      return navigate("/login");
    }
  });

  return Component;
}
