import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "reactstrap";
import { APIinstance } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [isFormOne, setIsFormOne] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("-----------  errors----------->", errors);

  // submit first form
  const submitOne = (e) => {
    e.preventDefault();
    setIsFormOne(false);
  };

  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies();
  const submitHandler = async (data) => {
    console.log("-----------  data----------->", data);
    let userRegister = {
      name: data?.name,
      email: data?.email,
      number: data?.number,
      password: data?.password,
      gender: data?.gender,
      address: [
        {
          add: data?.add,
          city: data?.city,
          state: data?.state,
          pinCode: data?.pinCode,
        },
      ],
    };
    try {
      const { data } = await APIinstance.post("/user/signup", userRegister);
      setCookies("user", data.data);
      setCookies("token", data.token);
      navigate("/");
    } catch (error) {
      console.log("---->", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" className="text-center" color="blue-gray">
            Sign Up
          </Typography>
          <hr className="mt-3 h-1 bg-red-500" />

          <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              {/* ------------name--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Name
                </Typography>
                <Controller
                  name="name"
                  rules={{
                    required: "Please Enter Name",
                  }}
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Contact Number
                </Typography>
                <Controller
                  name="number"
                  rules={{
                    required: "Please Enter Mobile number",
                    pattern: /^[0-9\b\+\-\(\)]+$/,
                  }}
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Email
                </Typography>
                <Controller
                  name="email"
                  rules={{
                    required: "Please Enter Email",
                  }}
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <div>
                  <h2>Select Your Hobbies</h2>
                  <div className="flex gap-4">
                    {["male", "female", "kids"].map((gender) => (
                      <div key={gender}>
                        <label className="mr-2" htmlFor={gender}>
                          {gender}
                        </label>
                        <Controller
                          name="gender"
                          control={control}
                          rules={{
                            required: "Please select gender",
                          }}
                          render={({ field }) => (
                            <input
                              type="radio"
                              id={gender}
                              value={gender}
                              checked={field.value === gender}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Password
                </Typography>
                <Controller
                  name="password"
                  rules={{
                    required: "Please Enter password",
                  }}
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Confirm Password
                </Typography>
                <Controller
                  name="cpassword"
                  rules={{
                    required: "Please Enter Confirm password",
                  }}
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Add-1
                </Typography>
                <Controller
                  name="add"
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your City
                </Typography>
                <Controller
                  name="city"
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your State
                </Typography>
                <Controller
                  name="state"
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your PinCode
                </Typography>
                <Controller
                  name="pinCode"
                  render={({ field }) => (
                    <Input className="formInput" {...field} />
                  )}
                  control={control}
                />
              </div>
            </div>

            <Button type="submit" className="mt-6 !btn">
              Sign Up
            </Button>
            {/* <Button
                className="py-2 mt-1 !btn flex justify-center items-center gap-2"
                onClick={() => handleSubmit(submitHandler)}
                fullWidth
              >
                <ArrowLeft /> Back
              </Button> */}
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-medium hover:underline text-red-500 cursor-pointer"
              >
                Sign In
              </span>
            </Typography>
          </div>
        </Card>
      </form>
    </div>
  );
}

/*
let data ={
  name: data?.name,
  email: data?.email,
  number: data?.number,
  password: data?.password,
  gender: data?.gender,
  
      add: data?.add,
      city: data?.city,
      state: data?.state,
      pinCode: data?.pinCode,
   
}

let d ={
  name:data.name,
  email: data?.email,
  number: data?.number,
  password: data?.password,
  gender: data?.gender,
  address:[
    {
      add:data.add,
      city: data?.city,
      state: data?.state,
      pinCode: data?.pinCode,
    }
  ]
}
  */

/*
axios.get("url",headers)
axios.post("url",body,headers)
axios.put("url",body,headers)
axios.delete("url",body,headers)

*/
