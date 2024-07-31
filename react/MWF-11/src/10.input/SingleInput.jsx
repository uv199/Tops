import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [updateMode, setUpdateMode] = useState(false);
  let [index, setIndex] = useState(null);

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

  const editHandler = (value, index) => {
    console.log("-----------  value----------->", value);
    setTask(value);
    setUpdateMode(true);
    setIndex(index);
  };

  const updateHandler = () => {
    //  arr = taskArr state
    // newData = task state
    // index = index state
    let newData = taskArr.toSpliced(index, 1, task);
    setTaskArr(newData);
    setTask("");
    setUpdateMode(false);
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
        {updateMode ? (
          <Button onClick={() => updateHandler()} className="rounded-s-none">
            Update
          </Button>
        ) : (
          <Button onClick={() => addTask()} className="rounded-s-none">
            Add
          </Button>
        )}
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
                <div className="flex gap-2">
                  <p
                    onClick={() => deleteHandler(i)}
                    className="text-red-300 underline cursor-pointer text-sm"
                  >
                    Delete
                  </p>
                  <p
                    onClick={() => editHandler(e, i)}
                    className="text-blue-300 underline cursor-pointer text-sm"
                  >
                    Edit
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



