import React from "react";
import { Button } from "reactstrap";

export default function Profile() {
  return (
    <div className="d-flex justify-content-center m-5">
      <h1>Hello User</h1>
      <Button>LogOut</Button>
    </div>
  );
}
