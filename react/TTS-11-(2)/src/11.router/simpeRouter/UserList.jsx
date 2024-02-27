import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function UserList() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center">User list</h1>
      <div className="d-flex pt-5 gap-2 justify-content-center">
        <Button onClick={() => navigate("/msg/urvish")}>Urvish</Button>
        <Button onClick={() => navigate("/msg/jayom")}>Jayom</Button>
        <Button onClick={() => navigate("/msg/dhwanil")}>Dhwanil</Button>
        <Button onClick={() => navigate("/msg/archit")}>Archit</Button>
      </div>
    </>
  );
}
