import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  const getData = (e) => {
    // e.targte => input tage details
    // console.log("------", e.target.value);
    // console.log("------", e.target.name);
    setTask(e?.target?.value);
  };

  const addData = () => {
    console.log("---->s", task);
    console.log("---oldArr->", taskArr);
    // ... for old array copy and add new element
    setTaskArr([...taskArr, task]);
    // to clear input value
    setTask("");
  };
  return (
    <>
      {/* <h1>{task}</h1> */}
      <div
        style={{ minWidth: "300px" }}
        className="mt-3 w-50 d-flex border rounded-2 p-2 "
      >
        <Input
          className="shadow-none rounded-0 w-100"
          name="todo"
          onChange={(e) => getData(e)}
          placeholder="Please enter task"
          // to controll input value
          value={task}
        />
        <Button
          onClick={() => addData()}
          className="shadow-none rounded-0"
          color="danger"
        >
          <Plus />
        </Button>
      </div>
      <div
        style={{ minWidth: "300px" }}
        className="w-50 border rounded-1 p-3 mt-4"
      >
        <h1 className="text-center">Task List</h1>
        <hr
          style={{ width: "100%", height: "5px", backgroundColor: "black" }}
        />
        <ol>
          {taskArr.map((e, i) => {
            return (
              <>
                <li className="m-0" key={i}>
                  {e}
                </li>
                <hr className="mt-0" />
              </>
            );
          })}
        </ol>
      </div>
      <h1>Data not Available</h1>
    </>
  );
}
