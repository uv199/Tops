import React, { useContext } from "react";
import { AgeContext } from "./UseContaxt";

// set input

export default function ComA3({ name }) {
  let data = useContext(AgeContext);
  return (
    <div>
      <h1>My name is {name}</h1>
      <h3>And i am {data.age} years old</h3>
    </div>
  );
}
