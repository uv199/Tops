import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { APIinstance } from "../../../api/axiosConfig";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [cookie, setCookies] = useCookies();
  const navigate = useNavigate();
  const signinHandler = async (data) => {
    let userData = {
      email: data?.email,
      password: data?.password,
    };
    console.log("🚀 ~ signinHandler ~ userData:", userData);
    try {
      const { data } = await APIinstance.post("/user/signin", userData);
      if (!data) {
        toast.error("Please enter valid credential");
      } else {
        setCookies("user", data.data);
        setCookies("token", data.token);
        if (data.data.userType === "admin") {
          navigate("/admin-product");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center" color="blue-gray">
          Sign In
        </Typography>
        <hr className="mt-3 h-1 bg-red-500" />
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Email
            </Typography>
            <Controller
              name="email"
              rules={{
                required: "Please Enter Email",
              }}
              render={({ field }) => <Input className="formInput" {...field} />}
              control={control}
            />
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
              render={({ field }) => <Input className="formInput" {...field} />}
              control={control}
            />
          </div>
          <Button
            className="mt-6 !btn"
            fullWidth
            onClick={handleSubmit(signinHandler)}
          >
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Create an account?
            <span
              onClick={() => navigate("/register")}
              className="font-medium hover:underline text-red-500 cursor-pointer"
            >
              Sign Up
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
