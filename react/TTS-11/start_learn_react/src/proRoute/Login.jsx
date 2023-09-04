import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { userAuth } from "./Auth";
export default function Login() {
  let [user, setUser] = useState({ name: "", password: "" });

  // to import usecontext function
  let auth = userAuth();

  // to call login function
  function addData() {
    auth.login(user);
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, name: e?.target?.value })}
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
      />
      <Button className="mt-2" onClick={() => addData()} variant="primary">
        login
      </Button>
    </>
  );
}
