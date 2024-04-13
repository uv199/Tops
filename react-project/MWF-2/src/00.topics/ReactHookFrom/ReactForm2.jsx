import React from "react";
import { useForm } from "react-hook-form";

export default function ReactForm2() {
  let { register, handleSubmit, formState } = useForm();

  let { errors } = formState;
  const submit = (data) => {};
  return (
    <div className="d-flex justify-content-center ">
      <form
        onSubmit={handleSubmit(submit)}
        className="d-flex flex-column border p-3"
      >
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="text"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-danger">Email is Required</p>}
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="text"
          {...register("password", { required: "Email is required" })}
        />
        {errors.password && (
          <p className="text-danger">{errors?.password?.message}</p>
        )}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
