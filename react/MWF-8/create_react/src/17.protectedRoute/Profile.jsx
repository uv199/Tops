import useConfig from "antd/es/config-provider/hooks/useConfig";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { authUser } from "./Auth";

export default function Profile() {
  const { logOut, user } = authUser();

  return (
    <>
      <div className="d-flex flex-column">
        <h1>heyy {user}....!</h1>
        <Button variant="info" onClick={() => logOut()}>
          LogOut
        </Button>
      </div>
    </>
  );
}
