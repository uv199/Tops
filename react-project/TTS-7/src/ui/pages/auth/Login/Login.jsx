import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center" color="blue-gray">
          Sign In
        </Typography>
        <hr className="mt-3 h-1 bg-red-500" />
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 !btn" fullWidth>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Create an account?
            <p
              onClick={() => navigate("/register")}
              className="font-medium hover:underline text-red-500 cursor-pointer"
            >
              Sign Up
            </p>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
