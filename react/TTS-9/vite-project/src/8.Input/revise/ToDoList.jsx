import { Divide } from "lucide-react";
import React, { useState } from "react";
import { ArrowRight, CheckCircleFill, Trash3 } from "react-bootstrap-icons";
import { Button, Input, Label } from "reactstrap";

export default function ToDoList() {
  let [task, setTask] = useState("");
  let [pendingTask, setPendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);

  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  const addTask = () => {
    let allData = [...pendingTask, task]; // combine old + new data
    setPendingTask(allData);
    setTask(""); // to empty input value after add task
  };

  // delete todo
  const deleteHandler = (index) => {
    let ans = confirm("Are you sure ?");
    console.log("-----------  ans----------->", ans);
    if (ans) {
      let arr = pendingTask.filter((e, i) => i !== index);
      setPendingTask(arr);
    }
  };

  // single done task handler
  const doneTaskHandler = (index) => {
    setDoneTask([...doneTask, pendingTask[index]]);
    let newData = pendingTask?.filter((e, i) => i !== index);
    setPendingTask(newData);
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
      <div className="d-flex w-100 p-4 justify-content-between ">
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <h1 className="text-center">Pending Task</h1>
          <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
          <ul>
            {pendingTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2">
                      <CheckCircleFill
                        role="button"
                        color="green"
                        onClick={() => doneTaskHandler(i)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <h1 className="text-center">Done Task</h1>
          <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
          <ul>
            {doneTask.map((element, i) => {
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
      </div>
    </>
  );
}

// let [task, setTask] = useState("");
// let [pendingTask, setPendingTask] = useState([]);

// tastArry = ["a", "b", "c", "d", "e"];
// index = 2;

// let arr = pendingTask.filter((e, i) => i !== index);

// arr = ["a", "b", "d", "e"];
// pendingTask= arr
// pendingTask=["a", "b", "d", "e"];
