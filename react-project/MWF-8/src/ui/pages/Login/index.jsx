import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let arr = [
    {
      email: "uv@gmail.com",
      password: "1234",
    },
    {
      email: "akshit@gmail.com",
      password: "456",
    },
  ];
  const onSubmit = (data) => {
    let matchdata = arr.find((e) => {
      return e.email === data.email;
    });
    if (matchdata) {
      localStorage.setItem("user", JSON.stringify(data));
      // alert("login succese...!");
      toast.warn("login succese...!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "zoom",
      });
    } else {
      alert("user not found...!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="abc@gmail.com" {...register("email")} />
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <ToastContainer limit={1} />
    </>
  );
}
