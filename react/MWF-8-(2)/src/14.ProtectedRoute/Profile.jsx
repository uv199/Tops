import React from "react";
import { Button } from "reactstrap";

export default function Profile() {
  const logoutHandler = () => {
    localStorage.clear();
  };
  return (
    <div className="pt-3">
      <h1>Hello user </h1>
      <Button color="danger" onClick={() => logoutHandler()}>
        Logout
      </Button>
    </div>
  );
}
