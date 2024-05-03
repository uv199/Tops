import React, { useState } from "react";

export default function InputCom() {
  let [name, setName] = useState("");
  let [nameArr, setNameArr] = useState([]);
  console.log("-----------  nameArr----------->", nameArr);

  const getData = (e) => {
    setName(e.target.value);
  };

  const addNameHandler = () => {
    console.log("-=-=-=-=");
    setNameArr([...nameArr, name]);
    setName("");
  };

  return (
    <div>
      <h1>name : {name}</h1>
      <input
        value={name}
        placeholder="Enter your name"
        onChange={(e) => getData(e)}
      />
      <button onClick={() => addNameHandler()}>Submit</button>
      <hr />
      {nameArr?.map((e) => {
        return (
          <div>
            <h1>{e}</h1>
          </div>
        );
      })}
    </div>
  );
}
