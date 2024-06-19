import { Trash } from "lucide-react";
import React, { useState } from "react";

export default function InputRevise() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  console.log("-----------  taskArr----------->", taskArr);

  const getData = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTaskArr([...taskArr, task]);
    setTask("");
  };

  const deleteHandler = (index) => {
    let filterData = taskArr.filter((e, i) => i !== index);
    setTaskArr(filterData);
  };

  return (
    <div>
      <h1>Task : {task}</h1>
      <input
        value={task}
        type="text"
        name="task"
        className="border"
        onChange={(e) => getData(e)}
      />
      <button onClick={() => addTask()} className="border bg-gray-500 px-2">
        Add Task
      </button>
      <hr />
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
              <Trash
                color="red"
                className="cursor-pointer"
                onClick={() => deleteHandler(i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*
a => onClick(0)
b => onClick(1)
c => onClick(2)
d => onClick(3)
*/
