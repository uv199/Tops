import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../../Api/auth";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

export default function Register() {
  const navigate = useNavigate();
let [registerData,setRegisterData]=useState();
const [cookies, setCookie ] = useCookies(["token"]);

  const registerHandler =async (regdata) => {
      console.log("🚀 ~ file: Register.jsx:13 ~ registerHandler ~ regdata:", regdata)
      let { data, error } = await registerApi(regdata);
    if (error) toast.error("somthing went wrong");
    else {
      setCookie("token",data.token);
      setCookie("user",data.data);
      setRegisterData(data.data);
  }
}
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      conformpassword: "",
      contact: "",
    },
  });
  return (
    <div className="m-8 flex justify-center items-center ">
      <div className="border-[1px] border-gray-300 w-[50%] m-8 ">
        <p className="text-2xl m-5">Register</p>
        <p className="text-gray-400 m-5">
          If you have an account with us, please log in.
        </p>

        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex justify-start px-8  flex-col gap-5"
        >
          <span>
            <span className="flex items-center justify-between ">
              <label>NAME *</label>
              <p className="text-gray-400">* Required Fields</p>
            </span>
          </span>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextInput type="text" {...field} />}
          />

          <span>
            <label>E-MAIL *</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <TextInput type="email" {...field} />}
            />
          </span>
          <span>
            <label>PASSWORD *</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <TextInput type="password" {...field} />}
            />
          </span>

          <span>
            <label>CONFORM PASSWORD *</label>
            <Controller
              name="conformpassword"
              control={control}
              render={({ field }) => <TextInput type="password" {...field} />}
            />
          </span>
          <span>
            <label>MOBAIL NUMBER *</label>
            <Controller
              name="contact"
              control={control}
              render={({ field }) => <TextInput type="number" {...field} />}
            />
          </span>

          <span className="flex items-center justify-between">
            <button
              type="submit"
              className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500"
            >
              REGISTER
            </button>
            <p className="text-[#d11e33cb]">Lost your password?</p>
          </span>
        </form>
        <span className="flex  items-center">
          <p className="text-gray-400 m-5">You Have Already Account ? </p>
          <p
            className="text-[#D11E33] cursor-pointer hover:border-b-2 border-[#D11E33] "
            onClick={() => navigate("/Login")}
          >
            Login
          </p>
        </span>
      </div>
    </div>
  );
}
