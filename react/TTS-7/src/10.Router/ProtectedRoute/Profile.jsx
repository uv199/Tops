import { Button } from "flowbite-react";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeCookies("user");
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1>Profile</h1>
      <Button onClick={() => logoutHandler()}>Logout</Button>
    </div>
  );
}
