import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("user") || "{}";
    setUser(JSON.parse(data));
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="pt-3">
      <h1>Hello {user.name || "User"} </h1>
      <h3>email : {user.email}</h3>
      <Button color="danger" onClick={() => logoutHandler()}>
        Logout
      </Button>
    </div>
  );
}
