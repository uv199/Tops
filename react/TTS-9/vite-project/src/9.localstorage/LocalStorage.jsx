import { Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";

export default function LocalStorage() {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, todo]);
    localStorage.setItem("todolist", JSON.stringify([...todoList, todo]));
    setTodo("");
  };

  useEffect(() => {
    let jsondata = localStorage.getItem("todolist");
    let normalData = JSON.parse(jsondata);
    setTodoList(normalData || []);
  }, []);

  const deleteHandler = (index) => {
    const filterdData = todoList.filter((e, i) => i !== index);
    setTodoList(filterdData);
    localStorage.setItem("todolist", JSON.stringify(filterdData));
  };

  return (
    <>
      <h1>Add Todo</h1>
      <Label>Todo</Label>
      <div className="w-50 d-flex gap-3 justify-content-center">
        <Input
          value={todo}
          onChange={(e) => setTodo(e?.target?.value)}
          className="w-50"
          placeholder="Add your task"
        />
        <Plus role="button" size={32} color="#545454" onClick={addTodo} />
      </div>
      <div className="w-50  mt-4 border border-dark rounded-3 p-3">
        <h1 className="text-center">My Task</h1>
        <hr />
        <ul>
          {todoList?.map?.((e, i) => {
            return (
              <>
                <div className="d-flex justify-content-between ">
                  <h5 key={i}>
                    {i + 1}. {e}
                  </h5>
                  <Trash
                    role="button"
                    color="#747272"
                    onClick={() => deleteHandler(i)}
                  />
                </div>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

/*
 useEffect(() => {
    localStorage.setItem("test", "teststtstt");
    localStorage.setItem("test2", "teststtstt");
    localStorage.setItem("test2", "test2");
  }, []);
  */
