import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { addTask } from "./fetures/task";
import TableCom from "./TableCom";

export default function User() {
  let [task, setTask] = useState("");

  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addTask(task));
  };

  return (
    <>
      <div className="flex m-3">
        <Input
          placeholder="Enter your task here"
          onChange={(e) => setTask(e?.target?.value)}
        />
        <Button onClick={() => addData()}>Add</Button>
      </div>
      <TableCom />
    </>
  );
}
