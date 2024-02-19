import React, { useState } from "react";
import { Input } from "reactstrap";

const fromData = [
  { type: "email", field: "email" },
  { type: "text", field: "name" },
  { type: "number", field: "number" },
  { type: "range", field: "price" },
  { type: "password", field: "password" },
];
export default function FormData() {
  const [user, setUser] = useState({
    email: "dsacfasdfasdfa",
    name: "`13123`13`1",
    number: "",
    price: "12",
    password: "",
  });
  return (
    <div>
      <h1>email: {user?.email}</h1>
      <h1>name: {user?.name}</h1>
      <h1>number: {user?.number}</h1>
      <h1>price: {user?.price}</h1>
      <h1>password: {user?.password}</h1>
      {fromData.map((e) => {
        let sentence = `Enter your ${e.field}`;
        return (
          <Input
            type={e.type}
            placeholder={sentence}
            value={user[e.field]}
            onChange={(ele) =>
              setUser({ ...user, [e.field]: ele.target.value })
            }
          />
        );
      })}
      {/* <Input type="email" placeholder="Enter your email" />
      <Input type="text" placeholder="Enter your name" />
      <Input type="number" placeholder="Enter your number" />
      <Input type="range" placeholder="Enter your price" />
      <Input type="password" placeholder="Enter your password" /> */}
    </div>
  );
}


/*

let obj = {
    name:"urvish",
    age:23
}

let key = "name"
console.log(obj[key])

*/
