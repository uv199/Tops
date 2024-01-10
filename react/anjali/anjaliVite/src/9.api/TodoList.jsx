import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function TodoList() {
  let [task, setTask] = useState("");
  let [allTask, setAllTask] = useState([]);
  let [index, setIndex] = useState(null);

  //   localStorage.setItem("userData", JSON?.stringify([10, 20, 30, 40])); // set
  //   localStorage.setItem("userData", JSON?.stringify([10, 20, 30, 40, 50, 60])); // update
  //   localStorage.setItem("userData2", JSON?.stringify([10, 20, 30, 40]));
  //   localStorage.clear() // remove all key
  //   localStorage.removeItem("userData"); // remove only given key

  //   let jsonData = localStorage.getItem("userData");
  //   let normalData = JSON.parse(jsonData);
  //   console.log("-----------  jsonData----------->", normalData);\

  useEffect(() => {
    let jsonData = localStorage.getItem("allTask");
    let normalData = JSON.parse(jsonData) || [];
    setAllTask(normalData);
  }, []);

  useEffect(() => {
    localStorage.setItem("allTask", JSON.stringify(allTask));
  }, [allTask]);

  const getData = (e) => {
    console.log("-----------  e----------->", e);
    setTask(e?.target?.value);
  };

  const addTask = () => {
    setAllTask([...allTask, task]);
    // allTask = []
    // alltask=["test"]
    setTask("");
    // localStorage.setItem("allTask", JSON.stringify([...allTask, task]));
  };

  // DELETE
  const deleteHandler = (index) => {
    // whole array = allTask
    //index = index
    const filteredData = allTask?.filter((e, i) => i !== index);
    setAllTask(filteredData);
    // localStorage.setItem("allTask", JSON.stringify(filteredData));
  };

  // update handler
  const updateHandler = (e, i) => {
    setTask(e);
    setIndex(i);
  };

  // update task
  const updateTask = () => {
    // index value should not be null/undefinednd/false/0
    if (index || index === 0) {
      allTask.splice(index, 1, task);
      setAllTask([...allTask]);
      //   localStorage.setItem("allTask", JSON.stringify([...allTask]));
      setTask("");
      setIndex(null);
    }
  };
  return (
    <>
      <div className=" w-50 border border-dark p-3 rounded-2">
        <Input
          value={task}
          onChange={(e) => getData(e)}
          placeholder="Please add task"
        />
        {index || index === 0 ? (
          <Button className="w-100 mt-3" color="danger" onClick={updateTask}>
            Update
          </Button>
        ) : (
          <Button className="w-100 mt-3" color="danger" onClick={addTask}>
            Add Task
          </Button>
        )}
      </div>
      <div>
        <ul>
          {allTask?.map?.((e, i) => {
            return (
              <div className="d-flex gap-2 mb-3">
                <li key={i}>{e}</li>
                <Button color="danger" onClick={() => deleteHandler(i)}>
                  Delete
                </Button>
                <Button color="danger" onClick={() => updateHandler(e, i)}>
                  Update
                </Button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// setitem => to set data - add/update
// getitem => to get data
// removeitem => remove only one key data
// clear => all key data
