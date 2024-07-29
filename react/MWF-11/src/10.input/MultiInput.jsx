import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const TABLE_HEAD = ["Sr.", "Name", "Gender", "Email", "Password", "action"];
export default function MultiInput() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [userArr, setUserArr] = useState([]);

  let submitHandler = () => {
    setUserArr([...userArr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
    });
  };

  const deleteHandler = (index) => {
    let filterArr = userArr.filter((e, i) => i !== index);
    setUserArr(filterArr);
  };

  return (
    <div>
      <h1>Email : {user.email}</h1>
      <h1>Password : {user.password}</h1>
      <div className="flex flex-col gap-2 border border-black rounded-md p-4">
        <Input
          value={user.name}
          label="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          value={user.email}
          label="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          value={user.password}
          label="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div>
          <h1>gender : {user.gender}</h1>
          <input
            checked={user.gender === "male"}
            type="radio"
            onChange={(e) => setUser({ ...user, gender: "male" })}
          />
          Male
          <br />
          <input
            checked={user.gender === "female"}
            type="radio"
            onChange={() => setUser({ ...user, gender: "female" })}
          />
          Female
          <br />
          <input
            checked={user.gender === "other"}
            type="radio"
            onClick={() => setUser({ ...user, gender: "other" })}
          />
          Other
        </div>
        <Button onClick={() => submitHandler()}>Submit</Button>
      </div>
      <hr />
      <div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
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
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.name}
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
                      onClick={() => deleteHandler(index)}
                      variant="small"
                      className="text-red-500 underline cursor-pointer font-normal"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
