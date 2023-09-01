import React, { useContext, useState } from "react";
// import { authUser } from "./Auth";
import { Button } from "react-bootstrap";
import { AuthContext } from "./Auth";

export default function Login() {
  const [user, setUser] = useState();

  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login(user);
  };

  return (
    <>
      <div>
        {user}
        <input type="text" onChange={(e) => setUser(e?.target?.value)} />
        <Button variant="info" onClick={() => loginHandler()}>
          Login
        </Button>
      </div>
    </>
  );
}
