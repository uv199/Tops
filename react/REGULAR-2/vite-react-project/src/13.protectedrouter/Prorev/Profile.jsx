import React from "react";
import { Button } from "reactstrap";
import { authData } from "./Auth";
export default function Profile() {
  let auth = authData();
  return (
    <div>
      <h1>hello , {auth.user}</h1>
      <Button color="primary" onClick={() => auth?.logOut()}>
        Log-Out
      </Button>
    </div>
  );
}
