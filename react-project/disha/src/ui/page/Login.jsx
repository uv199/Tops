import axios from "axios";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [data, setdata] = useState({ email: "", password: "" });

  let [cookies, setCookies] = useCookies([]);

  const navigate = useNavigate();

  const Submithandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:9999/user/signin",
        data
      );
      setCookies("user", response?.data?.data);
      setCookies("token", response?.data?.token);
      navigate("/");
      setdata({ email: "", password: "" });
    } catch (error) {}
  };

  return (
    <div className="h-[300px] w-[400px] m-auto mt-5 bg-purple-300 rounded p-3 text-white shadow-md">
      <h1 className="h1 text-center">Login</h1>
      <form action="">
        <label className="text-xl">Email id</label>
        <Input
          value={data.email}
          type="email"
          placeholder="Enter Email id"
          className="bg-slate-100"
          onChange={(e) => setdata({ ...data, email: e.target?.value })}
        />

        <label className="text-xl">Password</label>
        <Input
          value={data?.password}
          type="password"
          placeholder="Enter Password"
          className="bg-slate-100"
          onChange={(e) => setdata({ ...data, password: e.target?.value })}
        />
      </form>
      <div className="text-center mt-3">
        <Button
          className="bg-blue-600 h-[40px] w-[200px]"
          onClick={(e) => Submithandler(e)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
