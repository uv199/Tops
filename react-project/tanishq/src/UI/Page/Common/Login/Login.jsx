import React from "react";
import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../../api/auth";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = async () => {
    let { data, error } = await loginApi({ email: "", password: "" });
    if (error) toast.error("somthing went wrong");
    else {
      // after login step
    }
  };
  return (
    <div className="m-8 flex justify-center items-center ">
      <div className="border-[1px] border-gray-300 w-[50%] m-8 flex justify-start p-8 flex-col gap-4">
        <p className="text-2xl">Login</p>
        <p className="text-gray-400">
          If you have Not an account with us, please Register.
        </p>
        <span className="flex items-center justify-between">
          <label>E-MAIL *</label>
          <p className="text-gray-400">* Required Fields</p>
        </span>
        <TextInput type="text" required />
        <label>PASSWORD *</label>
        <TextInput
          type="password"
          required
          className="border-0 border-red-700"
        />
        <span className="flex items-center justify-between">
          <button className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500">
            LOGIN
          </button>
          <p className="text-[#d11e33cb]">Lost your password?</p>
        </span>
        <span className="flex gap-2">
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
