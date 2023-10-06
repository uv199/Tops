import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../Redux/fetures/auth/authSlice";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BE_URL } from "../../../config";
export default function LoginForm() {
  let [Data, setData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post(`${BE_URL}/user/signin`, data)
      .then((resData) => {
        dispatch(login(resData.data));
        // do form blanck
        setData({
          email: "",
          password: "",
        });
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log("----errr------");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          style={{ backgroundColor: "lightcoral" }}
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column w-25 gap-2 p-4 border-1 rounded-3 m-4"
        >
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            onChange={(e) => setData({ ...Data, email: e?.target?.value })}
            value={Data?.email}
            className="p-1 ps-3 border-0 rounded-3"
            id="email"
            placeholder="Enter your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            onChange={(e) => setData({ ...Data, password: e?.target?.value })}
            id="password"
            value={Data?.password}
            className="p-1 ps-3 border-0 rounded-3"
            placeholder="Enter your Password"
          />
          {errors.name && <span>This field is required</span>}
          <input className="border-0 rounded-3 mt-3" type="submit" />
        </form>
      </div>
    </>
  );
}

/*

    name:  "urvish",
    email: "uv@gmail.com",
    number: "7575083084",
    password: "123456",
    age: 23,
    address: [
      {
        add:"A-308 abc",
        city: "surat",
        state: "gujrat",
        pinCode: "395007",
      },
    ], */
