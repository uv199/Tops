import useConfig from "antd/es/config-provider/hooks/useConfig";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let [user, setUser] = useState();

  const { getUser, logOut } = useContext(AuthContext);


  useEffect(() => {
    let user = getUser();
    setUser(user);
  });
  function logOutHandler() {
    logOut();
  }
  return (
    <>
      <div className="d-flex flex-column">
        <h1>heyy {user}....!</h1>
        <Button variant="info" onClick={() => logOutHandler()}>
          LogOut
        </Button>
      </div>
    </>
  );
}
