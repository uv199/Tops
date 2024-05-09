import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [arr, setArr] = useState([]);

  const getInputData = (e) => {
    setTask(e.target.value);
  };

  const addDataIntoArr = () => {
    setArr([...arr, task]); // ... for copy old data
    setTask(""); // blank a input after click
  };
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>input : {task}</h2>
      <Input
        value={task} // to controll input value
        className="w-25"
        onChange={(e) => getInputData(e)}
      />
      <Button onClick={() => addDataIntoArr()}>Add Task</Button>
      <div>
        <ul>
          {arr.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
