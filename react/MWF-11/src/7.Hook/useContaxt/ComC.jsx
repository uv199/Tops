import React, { useContext } from "react";
import { UserContext } from "./UseContextCom";

export default function ComC({ name }) {
  let data = useContext(UserContext);
  console.log("-----------  data----------->", data);

  return <h1>My name is {data?.name}</h1>;
}
