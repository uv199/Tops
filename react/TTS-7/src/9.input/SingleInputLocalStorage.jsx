import React, { useEffect, useState } from "react";
import { Plus } from "react-feather";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function SingleInputLocalStorage() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   let jsonData = localStorage.getItem("taskArr");
  //   let normalData = JSON.parse(jsonData) || [];
  //   setTaskArr(normalData);
  // }, []);

  useEffect(() => {
    let jsonData = localStorage.getItem("taskArr");
    let normalData = JSON.parse(jsonData) || [];
    let filterData = normalData.filter((e) => {
      return e.includes(searchText);
    });
    setTaskArr(filterData);
  }, [searchText]);

  const addTask = () => {
    setTaskArr([...taskArr, task]);
    localStorage.setItem("taskArr", JSON.stringify([...taskArr, task]));
    setTask("");
  };

  const deleteHandler = (index) => {
    let filterData = taskArr.filter((e, i) => i !== index);
    setTaskArr(filterData);
    localStorage.setItem("taskArr", JSON.stringify(filterData));
    toast.success("Task Deleted");
  };

  const editHandler = (value, index) => {
    setTask(value);
    setIndex(index);
  };

  const updateHandler = () => {
    taskArr.splice(index, 1, task);
    setTaskArr([...taskArr]);
    localStorage.setItem("taskArr", JSON.stringify([...taskArr]));

    setTask("");
    setIndex(null);
    toast.success("Task Updated");
  };

  return (
    <div className="w-1/3 mt-5">
      <p className="mb-1">Enter a Task</p>
      <div className="d-flex">
        <Input
          className="shadow-none rounded-end-0"
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {index || index === 0 ? (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => updateHandler()}
          >
            Edit
          </Button>
        ) : (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => addTask()}
          >
            <Plus />
          </Button>
        )}
      </div>

      <div className="w-full border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center mb-0">Task</h1>
        <hr className="mt-0" />
        <Input
          className="shadow-none"
          placeholder="Search your text here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {taskArr?.map?.((e, i) => {
          return (
            <div className="d-flex" key={i}>
              <div className=" border mt-2 px-2 py-1 rounded-2">{i + 1}.</div>
              <div className="flex justify-between w-100 border mt-2 px-2 py-1 rounded-2">
                <h5>{e}</h5>
                <div className="[&_*]:underline">
                  <button
                    className="mr-2 hover:!text-red-500"
                    onClick={() => editHandler(e, i)}
                  >
                    Edit
                  </button>
                  <button
                    className="hover:!text-red-500"
                    onClick={() => deleteHandler(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let arr = [];
arr = [10];

// case 1
// add without copy
arr = [20];
// now array will be [20]

// case -2
// add with copy
arr = [...arr, 20];
// now array will be [10,20]
