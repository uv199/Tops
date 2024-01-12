import { Divide } from "lucide-react";
import React, { useState } from "react";
import { ArrowRight, PencilSquare, Trash3 } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Button, Input, Label } from "reactstrap";

export default function SimpleInput() {
  let [task, setTask] = useState("");
  let [taskArray, setTaskArray] = useState([]);
  let [index, setIndex] = useState(null);

  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  const addTask = () => {
    if (task.length > 0) {
      let allData = [...taskArray, task]; // combine old + new data
      setTaskArray(allData);
      setTask(""); // to empty input value after add task
    } else {
      toast.error("Please feild data");
    }
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

  // updateHandler
  const updateHandler = (index, element) => {
    console.log("-----");
    setTask(element);
    setIndex(index);
  };

  // updateData
  const updateData = () => {
    console.log("---->");

    // 1. updatedData = task state
    // 2. array = taskarr
    // 3. index = index
    if (index || index === 0) {
      taskArray.splice(index, 1, task);
      setTaskArray([...taskArray]);
      setTask("");
      setIndex(null);
    } else {
      toast.warn("Please select some data for update");
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
          {/* {true ? ( */}
          <Button onClick={addTask} className="ms-2">
            Add Task
          </Button>
          {/* ) : ( */}
          <Button onClick={updateData} className="ms-2">
            Update
          </Button>
          {/* )} */}
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
                <div key={i} className="d-flex justify-content-between ">
                  <li>
                    {i + 1}. {element}
                  </li>
                  <div>
                    <PencilSquare
                      className="me-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => updateHandler(i, element)}
                    />
                    <Trash3
                      role="button"
                      onClick={() => deleteHandler(i)}
                      color="red"
                    />
                  </div>
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

let index = null;
function fun1(index, ele) {
  // get index
  // set index
}
function fun2(params) {
  // want index
}
