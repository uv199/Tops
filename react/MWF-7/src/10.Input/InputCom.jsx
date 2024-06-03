import { Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  const getData = (input) => {
    setTask(input.target.value);
  };

  const addData = () => {
    // Note - we use ... for copy old tasks
    setTaskArr([...taskArr, task]);
    setTask("");
  };

  const deleteHandler = (index) => {
    // to get all data whose index not match with given index
    // if example i click on 2nd index, i want all elements whose index is not 2nd
    let filterData = taskArr.filter((e, i) => {
      return i !== index;
    });
    setTaskArr(filterData);
  };

  return (
    <div>
      <h1>Task : {task}</h1>
      <div className="flex mt-3">
        <Input
          value={task}
          className="!w-[300px]"
          name="task"
          onChange={(e) => getData(e)}
          placeholder="Enter Your task"
        />
        <Button onClick={() => addData()}>
          <Plus />
        </Button>
      </div>

      <div className="border p-2 mt-3">
        <h2 className="text-center">Tasks</h2>
        <hr />
        {taskArr.map((e, i) => {
          return (
            <div className="flex justify-between border mb-1 py-1 px-2" key={i}>
              <div className="flex justify-start">
                <p className="!p-0 !m-0">{i + 1}.</p>
                <p className="!p-0 !m-0">{e}</p>
              </div>
              <Trash color="red" size={20} onClick={() => deleteHandler(i)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*

let taskArr = []
taskArr = [task]


*/
