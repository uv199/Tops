import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [user, setUser] = useState({ email: "", password: "" });

  let [cookies, setCookies] = useCookies([]);
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    setCookies("user", user);
    setUser({ email: "", password: "" });
    navigate("/");
  };
  return (
    <div>
      <form
        onSubmit={(e) => loginHandler(e)}
        className=" border p-4 mt-6 mx-auto flex max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            id="password1"
            type="password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
