import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="min-w-[100vw] flex py-4 gap-2 items-center justify-center">
      <Button onClick={() => localStorage.setItem("userType", "user")}>
        User Login
      </Button>
      <Button onClick={() => localStorage.setItem("userType", "admin")}>
        Admin Login
      </Button>
      <Button onClick={() => localStorage.setItem("userType", "employee")}>
        Employee Login
      </Button>
    </div>
  );
}
