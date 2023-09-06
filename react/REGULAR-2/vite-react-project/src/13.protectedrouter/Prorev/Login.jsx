import React, { useState } from "react";
import { authData } from "./Auth";
import { Button } from "reactstrap";

export default function Login() {
  let [input, setInput] = useState("");
  const auth = authData();
  console.log("🚀 ~ file: Login.jsx:8 ~ Login ~ auth:", auth)

  function callLoginFun() {
    auth.login(input);
  }
  return (
    <>
      <h1>enter your name</h1>
      <input type="text" onChange={(e) => setInput(e?.target?.value)} />
      <Button color="primary" onClick={() => callLoginFun()}>
        Login
      </Button>
    </>
  );
}
