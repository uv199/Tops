import { useState } from "react";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";

export default function LoginForm() {
  let [data, setData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let arr = [
    {
      email: "uv@gmali.com",
      pass: "12345",
    },
  ];
  const getData = (data) => {
    setData(data);
    let isMatch = arr.find((e) => {
      return e.email === data.email;
    });
    if (isMatch) {
      if (isMatch.pass !== data?.password) {
        toast.error("Password is Wrong");
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("login successfully");
      }
    } else {
      toast.error("Email is Wrong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(getData)}>
        <input {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <ToastContainer />
    </>
  );
}
