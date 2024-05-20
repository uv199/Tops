import React from "react";
import { Controller, useForm } from "react-hook-form";

import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../../Api/auth";
import { useCookies } from "react-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie ] = useCookies(["token"]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loginHandler = async (cred) => {
    let { data, error } = await loginApi(cred);
  
    if (error) {
      toast.error("Something went wrong");
    } else {
      setCookie("token",data.token);
      setCookie("user",data.data);
      if (data.data.userType === "admin") navigate("/product");
      else navigate("/");
    
    }
  };
 
  return (
    <div className="m-8 flex justify-center items-center ">
      <div className="border-[1px] border-gray-300 w-[50%] m-8 py-6">
        <p className="text-2xl px-8 ">Login</p>
        <p className="text-gray-400 px-8 ">
          If you have Not an account with us, please Register.
        </p>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex justify-start px-8 flex-col gap-4 py-5"
        >
          <span className="flex items-center justify-between">
            <label>E-MAIL *</label>
            <p className="text-gray-400">* Required Fields</p>
          </span>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextInput type="text" {...field} />}
          />

          <label>PASSWORD *</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <TextInput type="password" {...field} />}
          />

          <span className="flex items-center justify-between">
            <button
              type="submit"
              className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500"
              // onClick={() => navigate("/")}
              
            >
              LOGIN
            </button>

            <p className="text-[#d11e33cb]">Lost your password?</p>
          </span>
        </form>

        <span className="flex gap-2 px-8">
          <p className="text-gray-400">You Have Not a Account? </p>
          <p
            className="text-[#D11E33] cursor-pointer hover:border-b-2 border-[#D11E33]"
            onClick={() => navigate("/Register")}
          >
            Register
          </p>
        </span>
      </div>
    </div>
  );
}
