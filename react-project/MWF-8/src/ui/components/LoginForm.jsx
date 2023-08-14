import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="abc@gmail.com" {...register("email")} />
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input type="submit" />

      <input type="" />
    </form>
  );
}
