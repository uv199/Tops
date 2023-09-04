import React from "react";
import { userAuth } from "./Auth";
import { Button } from "react-bootstrap";
export default function Profile() {
  let { user,logout } = userAuth();
  console.log("🚀 ~ file: Profile.jsx:6 ~ Profile ~ user:", user);

  return (
    <>
      <h1>heyy {user.name} ...!</h1>
      <Button onClick={() => logout()} variant="primary">
        LogOut
      </Button>
    </>
  );
}
