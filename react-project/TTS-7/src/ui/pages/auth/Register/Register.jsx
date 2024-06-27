import {
  Card,
  Checkbox,
  Radio,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";


let userRegisterFormat = {
  name: "",
  number: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
  address: [],
};

let addressFormat = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function Login() {
  let [isFormOne, setIsFormOne] = useState(true);
  const navigate = useNavigate();
  let [userRegister, setUserRegister] = useState(userRegisterFormat);
  let [address, setAddress] = useState(addressFormat);
  let [formValidationComments, setFormValidationComments] = useState({
    mobile: "",
  });

  // submit first form
  const submitOne = () => {
    setIsFormOne(false);
  };

  const mobileNumberValidation = (number) => {
    var pattern = new RegExp(/^[0-9\b\+\-\(\)]+$/);
    if (!pattern.test(number)) {
      setFormValidationComments({
        ...formValidationComments,
        mobile: "Please Enter valid mobile number",
      });
    } else {
      setUserRegister({ ...userRegister, number: number });
      setFormValidationComments({
        ...formValidationComments,
        mobile: "",
      });
    }
  };

  const registerUser = () => {
    if (
      userRegister?.name === "" ||
      userRegister?.email === "" ||
      userRegister?.number === "" ||
      userRegister?.password === "" ||
      userRegister?.confirmPassword === ""
    ) {
      setIsFormOne(true);
      if (userRegister?.name === "") {
        toast.error("Please enter name");
      }
      if (userRegister?.email === "") {
        toast.error("Please enter Email");
      }
      if (userRegister?.number === "") {
        toast.error("Please enter mobile number");
      }
      if (userRegister?.password === "") {
        toast.error("Please enter password");
      }
      if (userRegister?.confirmPassword === "") {
        toast.error("Please enter confirm password");
      }
    } else {
      if (userRegister?.password !== userRegister?.confirmPassword) {
        toast.error("Password and confirm password do not match");
      } else {
        let emailExpre = new RegExp("^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$");
        if (!emailExpre.test(userRegister?.email)) {
          toast.error("Please enter a valid email");
        } else {
          setUserRegister({ ...userRegister, address: [address] });
          console.log("registerUser", { ...userRegister, address: [address] });
        }
      }
    }
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
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="urvish patel"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setUserRegister({ ...userRegister, name: e?.target?.value })
                  }
                  value={userRegister?.name}
                />
              </div>
              {/* ------------number--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Contact Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="1234567890"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => mobileNumberValidation(e?.target?.value)}
                  value={userRegister?.number}
                />
                <span className="text-red-600">
                  {formValidationComments?.mobile}
                </span>
              </div>
              {/* ------------email--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      email: e?.target?.value,
                    })
                  }
                  value={userRegister?.email}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <Radio
                    onChange={() => {
                      setUserRegister({ ...userRegister, gender: "male" });
                    }}
                    checked={userRegister?.gender == "male"}
                  />{" "}
                  Male
                  <Radio
                    onChange={() => {
                      setUserRegister({ ...userRegister, gender: "female" });
                    }}
                    checked={userRegister?.gender == "female"}
                  />{" "}
                  Female
                  <Radio
                    onChange={() => {
                      setUserRegister({ ...userRegister, gender: "other" });
                    }}
                    checked={userRegister?.gender == "other"}
                  />{" "}
                  Other
                </div>
              </div>
              {/* ------------password--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
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
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      password: e?.target?.value,
                    })
                  }
                  value={userRegister?.password}
                />
              </div>
              {/* ------------confirm password--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
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
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      confirmPassword: e?.target?.value,
                    })
                  }
                  value={userRegister?.confirmPassword}
                />
              </div>
            </div>

            <Button className="mt-6 !btn" onClick={() => submitOne()} fullWidth>
              Next
            </Button>
          </form>
        ) : (
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              {/* ------------add--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Add-1
                </Typography>
                <Input
                  size="lg"
                  placeholder="32-street"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setAddress({ ...address, add: e?.target?.value })
                  }
                  value={address?.add}
                />
              </div>
              {/* ------------city--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your City
                </Typography>
                <Input
                  size="lg"
                  placeholder="surat"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setAddress({ ...address, city: e?.target?.value })
                  }
                  value={address?.city}
                />
              </div>
              {/* ------------state--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your State
                </Typography>
                <Input
                  size="lg"
                  placeholder="Gujarat"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setAddress({ ...address, state: e?.target?.value })
                  }
                  value={address?.state}
                />
              </div>
              {/* ------------pincode--------- */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your PinCode
                </Typography>
                <Input
                  size="lg"
                  placeholder="395007"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) =>
                    setAddress({ ...address, pinCode: e?.target?.value })
                  }
                  value={address?.pinCode}
                />
              </div>
            </div>

            <Button
              className="mt-6 !btn"
              onClick={() => registerUser()}
              fullWidth
            >
              Sign Up
            </Button>
            <Button
              className="py-2 mt-1 !btn flex justify-center items-center gap-2"
              onClick={() => setIsFormOne(true)}
              fullWidth
            >
              <ArrowLeft /> Back
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-medium hover:underline text-red-500 cursor-pointer"
              >
                Sign In
              </span>
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
