import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserLogin }) {
  let navigate = useNavigate();
  function login(params) {
    localStorage.setItem("userLogin", true);
    setUserLogin(true);
    navigate("/");
  }
  return (
    <>
      <h1>Login</h1>
      <Button onClick={() => login()} variant="primary">
        Login
      </Button>
    </>
  );
}
