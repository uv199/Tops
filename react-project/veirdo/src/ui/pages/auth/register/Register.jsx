import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className=" flex py-5 justify-center">
      <Card
        className="border-2 border-blue-500 rounded-lg p-5"
        color="transparent"
        shadow={false}
      >
        <Typography
          variant="h4"
          className="text-center border-b-2 pb-3 border-blue-400"
          color="blue"
        >
          Register
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue" className="-mb-3">
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
            <Typography variant="h6" color="blue" className="-mb-3">
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

          <Button className="mt-6 bg-blue-500 text-white" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <NavLink
              to={"/login"}
              className="font-medium text-blue-500 underline "
            >
              Login
            </NavLink>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
