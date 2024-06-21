import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import { Card, Typography } from "@material-tailwind/react";
import ReactSelect from "react-select";

const TABLE_HEAD = ["Sr.", "Email", "Password", , "Gender", "Action"];

export default function FilterCom() {
  let [user, setUser] = useState({ email: "", password: "", gender: "" });
  let [userArr, setUserArr] = useState([]);
  let [filter, setFilter] = useState("all");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("multiData") || "[]");
    if (filter === "all") {
      setUserArr(data);
    } else {
      let filterData = data.filter((e) => {
        return e.gender === filter;
      });
      setUserArr(filterData);
    }
  }, [filter]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    localStorage.setItem("multiData", JSON.stringify([...userArr, user]));
    setUser({ email: "", password: "" });
  };

  return (
    <div>
      <form className="border p-3 rounded-md">
        <Label>Email</Label>
        <Input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="text"
        />
        <Label>Password</Label>
        <Input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
        />
        <div>
          <input
            type="radio"
            checked={user.gender === "male"}
            onChange={() => setUser({ ...user, gender: "male" })}
          />
          Male
        </div>
        <div>
          <input
            type="radio"
            checked={user.gender === "female"}
            onChange={() => setUser({ ...user, gender: "female" })}
          />
          Female
        </div>

        <Button
          type="submit"
          onClick={(e) => submitHandler(e)}
          className="mt-2 w-full"
        >
          Submit
        </Button>
      </form>

      <hr />
      <ReactSelect
        value={{ label: filter, value: filter }}
        options={[
          { label: "All", value: "all" },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        onChange={(e) => setFilter(e.value)}
      />
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
          {userArr.map(({ email, password, gender }, index) => {
            const isLast = index === userArr.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
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
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {password}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {gender}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/*

let data = {
  email: "",
  password: "",
};

let arr = [
  {
    email: "",
    password: "",
  },
  {
    email: "",
    password: "",
  },
];

*/
