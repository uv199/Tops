import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../Redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  //  take data from auth slice and show as per your design
  const loginUser = useSelector((state) => state?.auth?.user);
  //   console.log("loginUser", loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <>
      <div className="m-5">
        <h1>Profile</h1>
        <LogOut role="button" color="#ec2222" onClick={logoutHandler} />
      </div>
    </>
  );
}
