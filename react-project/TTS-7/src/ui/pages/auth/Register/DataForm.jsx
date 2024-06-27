import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function DataForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("-----------  errors----------->", errors);

  // user defined
  const submitHandler = (data) => {
    console.log("-----------  data----------->", data);
    console.log("---->");
  };

  return (
    <div className="flex justify-center m-3">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name="email"
          rules={{
            required: "Please enter message",
          }}
          render={({ field }) => <Input className="ring-2 ring-red-500" {...field} />}
          control={control}
        />
        {<p className="text-red-500 text-sm">{errors?.email?.message}</p>}
        <Controller
          name="password"
          render={({ field }) => <Input {...field} />}
          control={control}
        />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
