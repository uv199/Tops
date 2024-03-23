import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeCookie("user");
    removeCookie("token");
    navigate("/login");
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>User data show</h1>
        <Button color="danger" onClick={() => logoutHandler()}>
          Logout
        </Button>
      </div>
    </div>
  );
}
