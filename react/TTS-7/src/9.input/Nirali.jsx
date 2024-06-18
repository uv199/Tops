import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Nirali() {
  let [input, setInput] = useState("");
  let [inputArr, setInputArr] = useState([]);

  const addHandler = () => {
    let a = [1, 2];
    setInputArr([...inputArr, input]);
    setInput("");
    console.log(inputArr);
  };
  const deleteaHandler = (index) => {
    let filterData = inputArr.filter((e, i) => i != index);
    console.log(filterData);
    setInputArr(filterData);
  };
  const editHandler = (value, index) => {};
  return (
    <div>
      {input}
      <form>
        <Input
          type="text"
          value={input}
          placeholder="Enter name"
          onChange={(e) => setInput(e.target.value)}
        />

        <Button onClick={() => addHandler()}>add</Button>
        {inputArr.map((e, i) => {
          return (
            <div key={i} className="d-flex gap-2">
              <p>{i + 1}</p>
              <p>{e}</p>
              <Button onClick={() => deleteaHandler(i)}>delete</Button>
              <Button onClick={() => editHandler(e, i)}>Edit</Button>
            </div>
          );
        })}
      </form>
    </div>
  );
}
