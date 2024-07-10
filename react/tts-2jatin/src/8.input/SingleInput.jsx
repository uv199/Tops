import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

export default function SingleInput() {
  let [todo, setTodo] = useState("");
  let [todoArr, setTodoArr] = useState([]);

  const getData = (e) => {
    setTodo(e.target.value);
  };

  const addData = () => {
    // ... because need to copy old data
    setTodoArr([...todoArr, todo]);

    setTodo("");
  };
  return (
    <div className="p-5">
      <h1>{todo}</h1>
      <Input value={todo} label="ADD TODO" onChange={(e) => getData(e)} />
      <Button onClick={() => addData()} className="mt-2">
        Submit
      </Button>

      <hr />
      <div className="border p-4 rounded-lg border-black">
        <h1 className="text-center">Todo List</h1>
        <hr className="h-1 bg-black mb-2" />

        {todoArr.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </div>
    </div>
  );
}
