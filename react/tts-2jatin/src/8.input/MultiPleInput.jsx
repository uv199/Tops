import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const headData = ["Email", "Password", "GENDER", "Action"];

export default function MultiPleInput() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    gender: "",
  });
  let [userArr, setUserArr] = useState([]);

  let [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    // const filterData =  normalData.filter((e)=>e.gender===gender)
    // setUserArr(filterData)
  }, [gender]);

  const deleteHandler = (index) => {
    let filterData = userArr.filter((e, i) => i !== index);
    setUserArr(filterData);
  };

  return (
    <div className="flex flex-col justify-center">
      <Card color="transparent" shadow={false}>
        <h1>email:{user.email}</h1>
        <h1>password:{user.password}</h1>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          {/* let [user, setUser] = useState({
    email: "",
    password: "",
    gender: "",
  }); */}
          <div>
            <h1>gender : {user.gender}</h1>
            <div>
              <input
                checked={user.gender === "male"}
                type="radio"
                onClick={() => setUser({ ...user, gender: "male" })}
              />
              male
              <br />
              <input
                checked={user.gender === "female"}
                type="radio"
                onClick={() => setUser({ ...user, gender: "female" })}
              />
              female
              <br />
              <input
                checked={user.gender === "other"}
                type="radio"
                onClick={() => setUser({ ...user, gender: "other" })}
              />
              other
            </div>
          </div>
          <Button
            type="submit"
            onClick={(e) => submitHandler(e)}
            className="mt-6"
            fullWidth
          >
            sign up
          </Button>
        </form>
      </Card>

      <div>
        <select
          className="border border-black py-1 px-3 rounded-md"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="other">OTHER</option>
        </select>
      </div>
      {/* -------------------table start-------------- */}
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headData.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userArr.map((e, index) => {
              const isLast = index === userArr.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.password}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.gender}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      onClick={() => deleteHandler(index)}
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium text-red-500 underline"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

