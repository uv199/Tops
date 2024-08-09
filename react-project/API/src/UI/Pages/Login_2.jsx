import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login_2() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      let response = await axios.post(
        "http://localhost:9999/user/signin",
        user
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="w-96 m-auto pt-2">
      <h1> Login </h1>
      <Input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        label="email"
      />
      <Input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        label="Passward"
      />
      <Button
        onClick={() => {
          loginHandler();
        }}
      >
        Login
      </Button>
    </div>
  );
}
