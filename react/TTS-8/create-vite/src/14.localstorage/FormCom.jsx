import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormCom() {
  let [userData, setUserData] = useState({
    name: "",
    city: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getData = (data) => console.log("------->", data);

  return (
    <>
      <form onSubmit={handleSubmit(getData)}>
        <input {...register("name")} />
        <input {...register("city", { required: true })} />
        {errors.city && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}
