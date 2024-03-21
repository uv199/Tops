import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  let [cookie, setCookie, removeCookies] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeCookies("token");
    removeCookies("user");
    navigate("/");
  };
  return (
    <div className=" d-flex justify-content-center">
      <div>
        <h1>User</h1>
        <h2>Name : {cookie?.user?.name}</h2>
        <h2>Email : {cookie?.user?.email}</h2>
        <Button color="danger" onClick={() => logoutHandler()}>
          Logout
        </Button>
      </div>
    </div>
  );
}
