import { TextInput } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { registerApi } from "../../../api/auth";
import { useCookies } from "react-cookie";

export default function Register() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token", "user"]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
  });

  const registerHandler = async (cred) => {
    let { data, error } = await registerApi(cred);
    if (error) toast.error("somthing went wrong");
    else {
      await setCookie("token", data.token);
      await setCookie("user", data.data);
      if (data.data.userType === "admin") navigate("/admin-product");
      else navigate("/");
    }
  };

  return (
    <div className="m-8 flex justify-center items-center ">
      <div className="border-[1px] border-gray-300 w-[50%] m-8 flex justify-start p-8 flex-col ">
        <p className="text-2xl">Register</p>
        <p className="text-gray-400">
          If you have an account with us, please log in.
        </p>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className=" flex justify-start flex-col gap-4"
        >
          <span className="flex items-center justify-between">
            <label>NAME *</label>
            <p className="text-gray-400">* Required Fields</p>
          </span>
          <Controller
            name="name"
            control={control}
            render={(e) => <TextInput type="text" {...e.field} />}
          />

          <label>E-MAIL *</label>
          <Controller
            name="email"
            control={control}
            render={(e) => <TextInput type="text" {...e.field} />}
          />

          <label>PASSWORD *</label>
          <Controller
            name="password"
            control={control}
            render={(e) => <TextInput type="text" {...e.field} />}
          />

          <label>CONFORM PASSWORD *</label>
          <Controller
            name=""
            control={control}
            render={(e) => <TextInput type="text" {...e.field} />}
          />

          <label>MOBAIL NUMBER *</label>
          <Controller
            name="contact"
            control={control}
            render={(e) => <TextInput type="text" {...e.field} />}
          />

          <span className="flex mt-4 items-center justify-between">
            <button
              type="submit"
              className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500"
            >
              REGISTER
            </button>
            <p className="text-[#d11e33cb]">Lost your password?</p>
          </span>
          <span className="flex gap-2">
            <p className="text-gray-400">You Have Already Account? </p>
            <p
              className="text-[#D11E33] cursor-pointer hover:border-b-2 border-[#D11E33]"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </span>
        </form>
      </div>
    </div>
  );
}
