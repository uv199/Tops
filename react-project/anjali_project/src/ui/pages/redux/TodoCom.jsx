import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { addTodo, deleteTodo } from "../../../redux/fetures/todo";
import { Trash } from "lucide-react";

export default function TodoCom() {
  let [task, setTask] = useState("");
  let data = useSelector((state) => state.todoReducer.todo);
  console.log("-----------  data----------->", data);
  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div>
      <div className=" d-flex flex-column mt-4 p-3 gap-2 border rounded-2 ">
        <Input
          placeholder="Please add some no"
          value={task}
          onChange={(e) => setTask(e?.target?.value)}
        />
        <Button color="danger" onClick={addData}>
          Add Num
        </Button>
      </div>
      <h1>todo</h1>
      <div>
        {data.map((e, i) => {
          return (
            <>
              <div className="d-flex justify-content-between">
                <li key={i}>{e}</li>{" "}
                <Trash role="button" onClick={() => dispatch(deleteTodo(i))} />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
