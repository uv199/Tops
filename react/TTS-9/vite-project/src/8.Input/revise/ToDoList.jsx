import { Divide } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircleFill, Trash3 } from "react-bootstrap-icons";
import { Button, Input, Label } from "reactstrap";

export default function ToDoList() {
  let [task, setTask] = useState("");
  let [pendingTask, setPendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [selectDone, setSelectDone] = useState([]);
  let [selectPending, setSelectPending] = useState([]);
  let [searchPending, setSearchPending] = useState("");

  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pendingTodo") || "[]");
    console.log("-----------  data----------->", data);
    let filterData = data.filter((e) =>
      e.toLowerCase().includes(searchPending.toLowerCase())
    );
    setPendingTask(filterData);
    setDoneTask(JSON.parse(localStorage.getItem("doneTodo") || "[]"));
  }, [searchPending]);

  useEffect(() => {}, [searchPending]);

  const addTask = () => {
    let allData = [...pendingTask, task]; // combine old + new data
    localStorage.setItem("pendingTodo", JSON.stringify(allData));
    setPendingTask(allData);
    setTask(""); // to empty input value after add task
  };

  // delete todo
  const deleteHandler = (index) => {
    let ans = confirm("Are you sure ?");
    if (ans) {
      let arr = doneTask.filter((e, i) => i !== index);
      setDoneTask(arr);
      localStorage.setItem("doneTodo", JSON.stringify(arr));
    }
  };

  // single done task handler
  const doneTaskHandler = (index) => {
    setDoneTask([...doneTask, pendingTask[index]]);
    let newData = pendingTask?.filter((e, i) => i !== index);
    localStorage.setItem(
      "doneTodo",
      JSON.stringify([...doneTask, pendingTask[index]])
    );
    localStorage.setItem("pendingTodo", JSON.stringify(newData));
    setPendingTask(newData);
  };

  // select handler pending and done task
  const selectHandler = (index, type) => {
    if (type === "pending") {
      if (selectPending?.includes(index)) {
        setSelectPending(selectPending.filter((e) => e !== index));
      } else {
        setSelectPending([...selectPending, index]);
      }
    } else if (type === "done") {
      if (selectDone?.includes(index)) {
        setSelectDone(selectDone.filter((e) => e !== index));
      } else {
        setSelectDone([...selectDone, index]);
      }
    }
  };

  const selectAllHandler = (type, check) => {
    if (type === "done") {
      if (check) {
        setSelectDone(doneTask.map((e, i) => i));
      } else {
        setSelectDone([]);
      }
    } else if (type === "pending") {
      if (check) {
        setSelectPending(pendingTask.map((e, i) => i));
      } else {
        setSelectPending([]);
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-end">
        <div>
          <Label>Add Task</Label>
          <Input
            value={task}
            // to controll input value
            onChange={(e) => getData(e)}
            placeholder="Enter Task"
          />
        </div>
        <div>
          <Button onClick={addTask} className="ms-2">
            Add Task
          </Button>
        </div>
      </div>
      <div className="d-flex w-100 p-4 justify-content-between ">
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <div className="w-100 d-flex justify-content-end p-3">
            <Input
              className="w-50"
              placeholder="Search your task"
              value={searchPending}
              onChange={(e) => setSearchPending(e?.target?.value)}
            />
          </div>
          <h1 className="text-center">Pending Task</h1>
          <div className="w-100 d-flex justify-content-end ">
            <Label className="me-2">Select All</Label>
            <Input
              type="checkbox"
              checked={pendingTask.length === selectPending.length}
              className="shadow-none"
              onChange={(e) => selectAllHandler("pending", e?.target?.checked)}
            />
          </div>
          <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
          <ul>
            {pendingTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <Input
                        role="button"
                        onClick={() => selectHandler(i, "pending")}
                        checked={selectPending.includes(i)}
                        type="checkbox"
                        style={{ boxShadow: "none" }}
                      />
                      <CheckCircleFill
                        role="button"
                        color="green"
                        onClick={() => doneTaskHandler(i)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <div className="w-100 d-flex justify-content-end p-3">
            <Input className="w-50" placeholder="Search your task" />
          </div>
          <h1 className="text-center">Done Task</h1>
          <div className="w-100 d-flex justify-content-end ">
            <Label className="me-2">Select All</Label>
            <Input
              type="checkbox"
              checked={doneTask.length === selectDone.length}
              className="shadow-none"
              onChange={(e) => selectAllHandler("done", e?.target?.checked)}
            />
          </div>
          <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
          <ul>
            {doneTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <Input
                        checked={selectDone?.includes(i)}
                        type="checkbox"
                        role="button"
                        onChange={() => selectHandler(i, "done")}
                        style={{ boxShadow: "none" }}
                      />
                      <Trash3
                        role="button"
                        onClick={() => deleteHandler(i)}
                        color="red"
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

// let [task, setTask] = useState("");
// let [pendingTask, setPendingTask] = useState([]);

// tastArry = ["a", "b", "c", "d", "e"];
// index = 2;

// let arr = pendingTask.filter((e, i) => i !== index);

// arr = ["a", "b", "d", "e"];
// pendingTask= arr
// pendingTask=["a", "b", "d", "e"];
