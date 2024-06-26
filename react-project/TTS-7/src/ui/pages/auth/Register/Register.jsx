import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

let state = {
  name: "",
  number: "",
  gender: "",
  password: "",
  confirmPassword: "",
  address: [
    {
      add: "",
      city: "",
      state: "",
      pinCode: "",
    },
  ],
};

export default function Login() {
  let [isFormOne, setIsFormOne] = useState(true);
  const navigate = useNavigate();

  // submit first form
  const submitOne = () => {
    setIsFormOne(false);
  };

  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center" color="blue-gray">
          Sign Up
        </Typography>
        <hr className="mt-3 h-1 bg-red-500" />
        {isFormOne ? (
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              {/* ------------name--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="urvish patel"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* ------------number--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Contact Number
              </Typography>
              <Input
                size="lg"
                placeholder="urvish patel"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* ------------email--------- */}
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
              {/* ------------password--------- */}

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
              {/* ------------confirm password--------- */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm Password
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

            <Button className="mt-6 !btn" onClick={() => submitOne()} fullWidth>
              Next
            </Button>
          </form>
        ) : (
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              {/* ------------add--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Add-1
              </Typography>
              <Input
                size="lg"
                placeholder="32-street"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* ------------city--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your city
              </Typography>
              <Input
                size="lg"
                placeholder="surat"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* ------------state--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your State
              </Typography>
              <Input
                size="lg"
                placeholder="urvish patel"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* ------------pincode--------- */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your PinCode
              </Typography>
              <Input
                size="lg"
                placeholder="395007"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button className="mt-6 !btn" fullWidth>
              Sign Up
            </Button>
            <Button
              className=" py-2 mt-1 !btn flex justify-center items-center gap-2"
              fullWidth
            >
              <ArrowLeft /> Back
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <p
                onClick={() => navigate("/login")}
                className="font-medium hover:underline text-red-500 cursor-pointer"
              >
                Sign In
              </p>
            </Typography>
          </form>
        )}
      </Card>
    </div>
  );
}


/*

url - http://localhost:9999 + /user/login
{
  "name": "urvish",
  "email": "uvpatel199@gmail.com",
  "number": "209",
  "password": "123",
  "age": 1212,
  "address": [
    {
      "add": "adasda",
      "city": "surat",
      "state": "gujarat",
      "pinCode": "395007",  
    }
  ]
}
*/
