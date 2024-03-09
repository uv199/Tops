import { LogIn } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { logOut } from "../../../../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let { user } = useSelector((state) => state.authSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center p-5  ">
      <div className="border rounded-1 w-50 d-flex  align-items-center flex-column p-3">
        <img
          className="w-50"
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt=""
        />
        <div className="w-100">
          <hr />
          <h3>Name : {user.name || "User"} </h3>
          <h3>Email : {user.email} </h3>
          <h3>userType: {user?.userType}</h3>
          <Button
            onClick={() => logoutHandler()}
            color="danger"
            className="w-100"
          >
            Logout <LogIn />
          </Button>
        </div>
      </div>
    </div>
  );
}
