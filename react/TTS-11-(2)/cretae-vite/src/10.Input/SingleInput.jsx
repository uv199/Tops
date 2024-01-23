import { Edit, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const getData = (e) => {
    // e.targte => input tage details
    // console.log("------", e.target.value);
    // console.log("------", e.target.name);
    setTask(e?.target?.value);
  };

  const addData = () => {
    console.log("---task----", task);

    // task is avilable or not in array if available then throw erro otherwise add it
    if (task !== "") {
      // ... for old array copy and add new element
      setTaskArr([...taskArr, task]);
      // to clear input value
      setTask("");
    } else {
      toast.warn("Please fill the data");
    }
  };

  // delete handler
  const deleteHandler = (index) => {
    console.log("-----------  index----------->", index);
    let filterData = taskArr.filter((e, i) => i !== index);
    console.log("-----------  filterData----------->", filterData);
    setTaskArr(filterData);
  };

  // edit handler
  const editHandler = (data, index) => {
    console.log("-----------  data----------->", data);
    setTask(data);
    setIndex(index);
    setUpdateMode(true);
  };

  //  update handler

  const updateHandler = () => {
    let newArr = taskArr.map((e, i) => {
      if (i === index) {
        return task;
      } else {
        return e;
      }
    });
    setTaskArr(newArr);
    setTask("");
    setUpdateMode(false);
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

        {updateMode ? (
          <Button color="danger" onClick={() => updateHandler()}>
            Update
          </Button>
        ) : (
          <Button
            onClick={() => addData()}
            className="shadow-none rounded-0"
            color="danger"
          >
            <Plus />
          </Button>
        )}
      </div>

      <div
        style={{ minWidth: "300px" }}
        className="w-50 border rounded-1 p-3 mt-4"
      >
        <h1 className="text-center">Task List</h1>
        <hr
          style={{ width: "100%", height: "5px", backgroundColor: "black" }}
        />
        {taskArr.length > 0 ? (
          <ol>
            {taskArr.map((e, i) => {
              return (
                <>
                  <li className="m-0" key={i}>
                    {e}
                  </li>
                  <Trash
                    onClick={() => deleteHandler(i)}
                    color="red"
                    role="button"
                  />
                  <Edit
                    onClick={() => editHandler(e, i)}
                    color="gray"
                    role="button"
                  />
                  <hr className="mt-0" />
                </>
              );
            })}
          </ol>
        ) : (
          <p className="text-center">!.....Data not Available....!</p>
        )}
      </div>
    </>
  );
}
