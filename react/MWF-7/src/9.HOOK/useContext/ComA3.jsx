import React, { useContext } from "react";
import { UserContext } from "./UseContext";

export default function ComA3({ name }) {
  let data = useContext(UserContext);
  return (
    <div>
      <h1>My full name is {name}</h1>
      <h3>and i am {data.age} years old</h3>
    </div>
  );
}
