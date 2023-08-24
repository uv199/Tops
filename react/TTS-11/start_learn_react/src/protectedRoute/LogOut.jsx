import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LogOut({ setUserLogin }) {
  let navigate = useNavigate();
  function logOut(params) {
    localStorage.removeItem("userLogin");
    setUserLogin(false);
    navigate("/login");
  }
  return (
    <>
      <h1>LogOut</h1>
      <Button onClick={() => logOut()} variant="primary">
        Log-Out
      </Button>
    </>
  );
}
