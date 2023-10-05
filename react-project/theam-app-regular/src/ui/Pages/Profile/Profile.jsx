import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../redux/features/auth/authSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler() {
    dispatch(logOut());
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
