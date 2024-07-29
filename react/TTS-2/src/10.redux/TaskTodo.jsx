import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { addTask, deleteTask } from "./taskSlice";

export default function TaskTodo() {
  let [value, setValue] = useState("");

  let data = useSelector((store) => store.taskSlice);
  console.log("-----------  data----------->", data);

  const dispatch = useDispatch();
  const addTaskToRedux = () => {
    dispatch(addTask(value));
    setValue("");
  };
  const deleteTaskHandler = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <div>
      <Input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={addTaskToRedux}>AddTask</Button>
      <hr />
      <div>
        {data?.task?.map((e,i) => {
          return (
            <div className="flex justify-between">
              <li>{e}</li>
              <div>
                <p
                  onClick={()=>deleteTaskHandler(i)}
                  className="text-red-500 underline cursor-pointer"
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
