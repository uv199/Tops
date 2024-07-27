import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  const getData = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTaskArr([...taskArr, task]);
    setTask("");
  };

  const deleteHandler = (index) => {
    let filterArr = taskArr.filter((e, i) => i !== index);
    setTaskArr(filterArr);
  };

  return (
    <div className="mt-5">
      <h1>task : {task}</h1>
      <div className="flex">
        <Input
          value={task}
          className="rounded-e-none"
          label="Add Todo"
          onChange={(e) => getData(e)}
        />
        <Button onClick={() => addTask()} className="rounded-s-none">
          Add
        </Button>
      </div>
      <div className="mt-5 border px-4 py-5 border-gray-600">
        <h1 className="text-center">TASKS</h1>
        <hr className="h-1 bg-gray-500 mb-3" />
        <div>
          {taskArr.map((e, i) => {
            return (
              <div className="list-none flex border-b border-gray-400 justify-between">
                <div className="flex gap-2">
                  <p>{i + 1}.</p>
                  <li>{e}</li>
                </div>
                <div>
                  <p
                    onClick={() => deleteHandler(i)}
                    className="text-red-300 underline cursor-pointer text-sm"
                  >
                    Delete
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
function fub(x) {
 return x+10   
}

let y = 60

fub(y)


(ele)=>{
    return getData(ele)
}

(ele)=>getData(ele)
*/
