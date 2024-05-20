import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { FilePenLine } from "lucide-react";

export default function InputLocal() {
  let [task, setTask] = useState("");
  let [arr, setArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [upadteMode, setUpdateMode] = useState(false);

  const getInputData = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    let jsonString = localStorage.getItem("data");
    console.log("-----------  jsonString----------->", jsonString);
    let normalData = JSON.parse(jsonString);
    console.log("-----------  normalData----------->", normalData);
    setArr(normalData);
  }, []);
  const addDataIntoArr = () => {
    setArr([...arr, task]);
    localStorage.setItem("data", JSON.stringify([...arr, task]));
    setTask("");
  };

  const deleteHandler = (index) => {
    let newArr = arr.filter((e, i) => i !== index);
    setArr(newArr);
    localStorage.setItem("data", JSON.stringify(newArr));
  };

  const editHandler = (e, index) => {
    setIndex(index);
    setTask(e);
    setUpdateMode(true);
  };

  const updateData = () => {
    arr.splice(index, 1, task);
    setArr([...arr]);
    localStorage.setItem("data", JSON.stringify([...arr]));
    setUpdateMode(false);
    setTask("");
  };
  return (
    <div className="d-flex w-100 flex-column align-items-center justify-content-center m-3">
      <h2>input : {task}</h2>
      <h2>index : {index}</h2>
      <div className="d-flex w-100 align-items-center  justify-content-center">
        <Input
          value={task} // to controll input value
          className="w-25"
          placeholder="Please enter task"
          onChange={(e) => getInputData(e)}
        />
        {upadteMode ? (
          <Button onClick={() => updateData()}>Update</Button>
        ) : (
          <Button onClick={() => addDataIntoArr()}>Add Task</Button>
        )}
      </div>
      <div>
        <ul className="border rounded-md p-[10px] min-w-[50vw] mt-6">
          {arr.map((e, i) => {
            return (
              <div>
                <div className="group  d-flex  justify-content-between">
                  <li className="text-blue-500" key={i}>
                    {e}
                  </li>
                  <div>
                    <Button onClick={() => editHandler(e, i)}>
                      <FilePenLine />
                    </Button>
                    <button
                      className="ml-3 ring-1 ring-black rounded-md px-3 py-1 font-[400]  hover:ring-red-700 hover:ring-2 hover:!bg-[#eb6969] hover:text-red-900 group-hover:bg-black group-hover:text-white"
                      onClick={() => deleteHandler(i)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
