import React from "react";
import { userAuth } from "./Auth";
import { Button } from "react-bootstrap";
export default function Profile() {
  const auth = userAuth();
  return (
    <>
      <h2>Profile</h2>
      <h1>{auth.user}</h1>
      <Button onClick={() => auth.LogOut()} className="mt-3 p-2" variant="dark">
        logout
      </Button>
    </>
  );
}
