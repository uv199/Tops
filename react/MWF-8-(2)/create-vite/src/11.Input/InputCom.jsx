import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  // to get data from input
  const getData = (ele) => {
    setTask(ele?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    // ... to copy old data
    setTaskArr([...taskArr, task]);
    // to empty input after adding data
    setTask("");
  };

  return (
    <div className="d-flex flex-column align-content-center">
      <h1>task is {task}</h1>
      <div className="w-100 d-flex   justify-content-center ">
        <Input
          name="nameInput"
          className="w-25 rounded-end-0 "
          placeholder="Enter Your Task Here"
          onChange={(e) => getData(e)}
          // we take task in value to controll input value
          value={task}
        />
        <Button
          color="danger"
          className="rounded-start-0"
          onClick={() => addData()}
        >
          <Plus />
        </Button>
      </div>
      <div className="w-100 d-flex justify-content-center ">
        <ol className="w-25 mt-4 border p-3">
          {taskArr.map((e, i) => {
            return (
              <>
                <li key={i}>{e}</li> <hr />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
