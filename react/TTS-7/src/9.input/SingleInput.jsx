import React, { useState } from "react";
import { Plus } from "react-feather";
import { Button, Input } from "reactstrap";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  const getInputData = (ele) => {
    setTask(ele.target.value);
  };

  const addTask = () => {
    setTaskArr([...taskArr, task]);
    setTask("");
  };

  return (
    <div className="mt-5">
      <h4>{task}</h4>
      <p className="mb-1">Enter a Task</p>
      <div className="d-flex">
        <Input
          className="shadow-none rounded-end-0"
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => getInputData(e)}
        />
        <Button
          color="danger"
          className="rounded-start-0"
          onClick={() => addTask()}
        >
          <Plus />
        </Button>
      </div>
      <div className="border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center mb-0">Task</h1>
        <hr className="mt-0" />
        {taskArr.map((e, i) => {
          return (
            <div className="d-flex">
              <div className="border mt-2 px-2 py-1 rounded-2">{i + 1}.</div>
              <div className=" w-100 border mt-2 px-2 py-1 rounded-2">
                <h5>{e}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let arr = [];
arr = [10];

// case 1
// add without copy
arr = [20];
// now array will be [20]

// case -2
// add with copy
arr = [...arr, 20];
// now array will be [10,20]
