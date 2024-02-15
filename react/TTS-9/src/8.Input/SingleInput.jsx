import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";

export default function SingleInput() {
  let [todo, setTodo] = useState("");
  let [allTodo, setAllTodo] = useState([]);

  // get data from input
  const getData = (ele) => {
    // ele.target = information of input element
    // ele.target.value = input value
    setTodo(ele.target.value);
  };

  // add task to array
  const addTask = () => {
    // why use [...allTodo, todo] => to copy old data and add new
    setAllTodo([...allTodo, todo]);
    // to empty input after click on add todo button
    setTodo("");
  };

  return (
    <>
      <div className="w-50 border border-dark rounded-3 p-4 mt-5">
        <h1 className="text-center">ADD TODO</h1>
        <hr />
        <Label>Todo</Label>
        <Input
          // to manage input values
          value={todo}
          placeholder="Add your task"
          onChange={(e) => getData(e)}
        />
        <Button onClick={() => addTask()} className="w-100 mt-3" color="danger">
          Add
        </Button>
      </div>
      {allTodo.length > 0 ? (
        <div className="w-50 border border-dark rounded-3 p-4 mt-5">
          <h3 className="text-center">Your Todo List</h3>
          <hr />
          {allTodo.map((e, i) => {
            return (
              <h5>
                {i + 1} . {e}
              </h5>
            );
          })}
        </div>
      ) : (
        <h1>Please add some todo</h1>
      )}
    </>
  );
}

// let x = 12;
// let arr = [1, 2, 3];
