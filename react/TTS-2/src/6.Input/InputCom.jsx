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

  const deleteHandler = (index) => {
    let newArr = arr.filter((e, i) => i !== index);
    setArr(newArr);
  };
  return (
    <div className="d-flex w-100 flex-column align-items-center justify-content-center m-3">
      <h2>input : {task}</h2>
      <div className="d-flex w-100 align-items-center  justify-content-center">
        <Input
          value={task} // to controll input value
          className="w-25"
          placeholder="Please enter task"
          onChange={(e) => getInputData(e)}
        />
        <Button onClick={() => addDataIntoArr()}>Add Task</Button>
      </div>
      <div>
        <ul className="border rounded-md p-[10px] min-w-[50vw] mt-6">
          {arr.map((e, i) => {
            return (
              <div>
                <div className="group d-flex justify-content-between">
                  <li className="text-blue-500" key={i}>
                    {e}
                  </li>{" "}
                  <button
                    className="ring-1 ring-black rounded-md px-3 py-1 font-[400]  hover:ring-red-700 hover:ring-2 hover:!bg-[#eb6969] hover:text-red-900 group-hover:bg-black group-hover:text-white"
                    onClick={() => deleteHandler(i)}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
