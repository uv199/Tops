import React, { useContext } from "react";
import { UserContext } from "./MainCom";

export default function ComB2(props) {
  let data = useContext(UserContext);
  console.log("-----------  data----------->", data);
  return (
    <div>
      ComB2
      <h1>Name is {props.name}</h1>
      <h1>My age is {data}</h1>
    </div>
  );
}
