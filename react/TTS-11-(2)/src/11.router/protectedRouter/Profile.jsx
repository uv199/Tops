import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="w-25">
        <h1>Hello User</h1>
        <Button onClick={() => logoutHandler()}>LogOut</Button>
      </div>
    </div>
  );
}
