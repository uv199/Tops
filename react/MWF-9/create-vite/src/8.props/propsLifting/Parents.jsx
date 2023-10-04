import React, { useState } from "react";
import Child from "./Child";

export default function Parents() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Parents</h1>
      <h2>my name is {name}</h2>
      <Child setName={setName} />
    </>
  );
}
