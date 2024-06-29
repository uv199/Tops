import React, { useContext } from "react";
import { UserContaxt } from "./UseContaxt";
export default function ComA3({ name }) {
  let data = useContext(UserContaxt);
  console.log("-----------  data----------->", data);
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {data.age}</h1>
    </div>
  );
}
