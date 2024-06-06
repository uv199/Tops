import React, { useContext } from "react";
import { UserContext } from "./UseContaxt";

export default function ComA3({ name }) {
  console.log("-----------  name-a3----------->", name);
  let data = useContext(UserContext);
  console.log("-----------  data----------->", data);
  return (
    <div>
      <h1>My name is {name}</h1>
      <h3>And i am {data.age} year old</h3>
      {/* take input and set value in task here */}
      {/* <input type="text" onChange={(e) => setTask(e.target.value)} placeholder="Enter task" /> */}
    </div>
  );
}
