import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler() {
    navigate("/");
  }

  return (
    <>
      Profile
      <Button color="danger" onClick={() => logOutHandler()}>
        Logout
      </Button>
    </>
  );
}
