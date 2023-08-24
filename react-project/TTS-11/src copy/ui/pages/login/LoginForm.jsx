import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let userData = [
    {
      email: "uv@gmail.com",
      password: "1234",
    },
    {
      email: "meet@gmail.com",
      password: "456",
    },
  ];
  const addData = (data) => {
    let matchUser = userData.find((e) => {
      return e.email === data.email;
    });
    if (matchUser) {
      localStorage.setItem("user", JSON.stringify(matchUser));
    } else {
      alert("user not Found...!");
    }
  };

  return (
    <form onSubmit={handleSubmit(addData)}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>Email field is required</span>}

      <input {...register("password", { required: true })} />
      {errors.password && <span>Password field is required</span>}

      <input type="submit" />
    </form>
  );
}
