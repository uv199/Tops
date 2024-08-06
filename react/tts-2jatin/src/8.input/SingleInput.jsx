import { Button, Input } from "@material-tailwind/react";
import { CircleCheckBig } from "lucide-react";
import React, { useState } from "react";

export default function SingleInput() {
  let [todo, setTodo] = useState("");
  let [todoArr, setTodoArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const getData = (e) => {
    setTodo(e.target.value);
  };

  const addData = () => {
    // ... because need to copy old data
    setTodoArr([...todoArr, todo]);
    setTodo("");
  };

  const deleteHandler = (index) => {
    let filterData = todoArr.filter((e, i) => i !== index);
    setTodoArr(filterData);
  };

  const editHandler = (i, value) => {
    setTodo(value);
    setIndex(i);
    setUpdateMode(true);
  };

  const updateHandler = () => {
    todoArr.splice(index, 1, todo);
    setTodoArr([...todoArr]);
    setTodo("");
    setUpdateMode(false);
  };

  return (
    <div className="p-5">
      <div className="flex mb-4">
        <Input
          value={todo}
          className="rounded-e-none"
          label="ADD TODO"
          onChange={(e) => getData(e)}
        />

        {updateMode ? (
          <Button onClick={() => updateHandler()} className="rounded-s-none">
            update
          </Button>
        ) : (
          <Button onClick={() => addData()} className="rounded-s-none">
            Submit
          </Button>
        )}
      </div>

      <hr />
      <div className="border p-4 rounded-lg border-black">
        {todoArr.length > 0 ? (
          <>
            <h1 className="text-center">Todo List</h1>
            <hr className="h-1 bg-black mb-2" />
            <div className="flex flex-col gap-2 min-w-[250px]">
              {todoArr.map((e, i) => {
                return (
                  <div className="flex justify-between border list-none px-2 border-gray-500 rounded-md py-1">
                    <div className="flex gap-1">
                      <CircleCheckBig />
                      <li key={i}>{e}</li>
                    </div>
                    <div className="flex gap-2">
                      <p
                        className="cursor-pointer text-blue-500 underline"
                        onClick={() => editHandler(i, e)}
                      >
                        Edit
                      </p>
                      <p
                        className="cursor-pointer text-red-500 underline"
                        onClick={() => deleteHandler(i)}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h1 className="text-2xl">Data not available..!</h1>
        )}
      </div>
    </div>
  );
}


