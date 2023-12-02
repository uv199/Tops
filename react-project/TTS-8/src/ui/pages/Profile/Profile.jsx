import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { logout } from "../../../redux/fetures/auth/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const userData = useSelector((state) => state.authReducer.user);
  let add = Object?.values?.(userData?.address?.[0] || {});
  delete add?.pop();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div className="background" id="parallax-bg"></div>
      <div className="card">
        <div className="cover-bg"></div>
        <div className="user-info-wrap">
          <div className="user-photo"></div>
          <div className="user-info">
            <div className="user-name">{userData?.name}</div>
            <div className="user-title">{userData?.email}</div>
          </div>
        </div>
        <div className="user-bio">
          <p>{add?.join?.(",")}</p>
        </div>
        <Button onClick={() => logoutHandler()} className="m-3" color="danger">
          LogOut
        </Button>
      </div>
    </>
  );
}
