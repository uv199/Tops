import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { userAuth } from "./Auth";

export default function Login() {
  let [user, setUser] = useState({ email: "", password: "" });

  let auth = userAuth();

  function logInUser() {
    auth.LogIn(user);
  }
  return (
    <>
      <label htmlFor="name">Email: </label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
      />
      <label htmlFor="name">Password : </label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
      />
      <Button onClick={() => logInUser()} className="mt-3 p-2" variant="dark">
        Submit
      </Button>
    </>
  );
}
