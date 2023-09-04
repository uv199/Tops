import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { userAuth } from "./Auth";
// console.log("🚀 ~ file: Login.jsx:4 ~ userAuth:", userAuth)

export default function Login() {
  let [user, setUser] = useState("");

  let auth = userAuth();

  function logInUser() {
    auth.LogIn(user);
  }
  return (
    <>
      <label htmlFor="name">Name </label>
      <input type="text" onChange={(e) => setUser(e?.target?.value)} />
      <Button onClick={() => logInUser()} className="mt-3 p-2" variant="dark">
        Submit
      </Button>
    </>
  );
}
