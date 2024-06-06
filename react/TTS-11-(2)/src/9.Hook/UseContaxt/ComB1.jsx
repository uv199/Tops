import React, { useContext } from "react";

import { UserContext } from "./UseContaxt";

export default function ComB1() {
  let data = useContext(UserContext);
  console.log("-----------  data----------->", data);
  return (
    <div>
      <hr />
      <h1>ComB1</h1>
      <h3>Age is {data?.age}</h3>
      {/* display task value */}
      {/* <h1>task : {task}</h1> */}
    </div>
  );
}
