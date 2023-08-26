import React from "react";
import { userAuth } from "./Auth";
import { Button } from "react-bootstrap";
export default function Profile() {
  let auth = userAuth();

  return (
    <>
      <h1>heyy {auth.user} ...!</h1>
      <Button onClick={() => auth.logout()} variant="primary">
        LogOut
      </Button>
    </>
  );
}
