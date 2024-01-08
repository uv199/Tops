import { Divide } from "lucide-react";
import React, { useState } from "react";
import { ArrowRight, Trash3 } from "react-bootstrap-icons";
import { Button, Input, Label } from "reactstrap";

export default function SimpleInput() {
  let [task, setTask] = useState("");
  let [taskArray, setTaskArray] = useState([]);

  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  const addTask = () => {
    let allData = [...taskArray, task]; // combine old + new data
    setTaskArray(allData);
    setTask(""); // to empty input value after add task
  };

  // delete todo
  const deleteHandler = (index) => {
    let ans = confirm("Are you sure ?");
    console.log("-----------  ans----------->", ans);
    if (ans) {
      let arr = taskArray.filter((e, i) => i !== index);
      setTaskArray(arr);
    }
  };

  return (
    <>
      <div className="d-flex align-items-end">
        <div>
          <Label>Add Task</Label>
          <Input
            value={task}
            // to controll input value
            onChange={(e) => getData(e)}
            placeholder="Enter Task"
          />
        </div>
        <div>
          <Button onClick={addTask} className="ms-2">
            Add Task
          </Button>
        </div>
      </div>
      <div
        style={{ minWidth: "50%" }}
        className="border border-dark rounded-2 pe-2 mt-3"
      >
        <h1 className="text-center">Tasks List</h1>
        <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
        <ul>
          {taskArray.map((element, i) => {
            return (
              <>
                <div className="d-flex justify-content-between ">
                  <li key={i}>
                    {i + 1}. {element}
                  </li>
                  <Trash3 onClick={() => deleteHandler(i)} color="red" />
                </div>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// let [task, setTask] = useState("");
// let [taskArray, setTaskArray] = useState([]);

// tastArry = ["a", "b", "c", "d", "e"];
// index = 2;

// let arr = taskArray.filter((e, i) => i !== index);

// arr = ["a", "b", "d", "e"];
// taskArray= arr
// taskArray=["a", "b", "d", "e"];
