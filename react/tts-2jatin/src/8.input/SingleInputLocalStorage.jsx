import { Button, Input } from "@material-tailwind/react";
import { CircleCheckBig } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SingleInputLocalStorage() {
  let [todo, setTodo] = useState("");
  let [searchText, setSearchText] = useState("");
  let [todoArr, setTodoArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const addData = () => {
    // ... because need to copy old data
    setTodoArr([...todoArr, todo]);
    localStorage.setItem("todo", JSON.stringify([...todoArr, todo]));
    setTodo("");
  };

  useEffect(() => {
    let jsonData = localStorage.getItem("todo");
    let normalData = JSON.parse(jsonData);
    let filterData = normalData.filter((e) => e.includes(searchText));
    setTodoArr(filterData);
  }, [searchText]);

  const deleteHandler = (index) => {
    let filterData = todoArr.filter((e, i) => i !== index);
    setTodoArr(filterData);
    localStorage.setItem("todo", JSON.stringify(filterData));
  };

  const editHandler = (i, value) => {
    setTodo(value);
    setIndex(i);
    setUpdateMode(true);
  };

  const updateHandler = () => {
    todoArr.splice(index, 1, todo);
    setTodoArr([...todoArr]);
    localStorage.setItem("todo", JSON.stringify([...todoArr]));
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
          onChange={(e) => setTodo(e.target.value)}
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
      <Input
        label="Search your text..."
        onChange={(e) => setSearchText(e.target.value)}
      />
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

