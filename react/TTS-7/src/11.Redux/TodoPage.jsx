import React, { useEffect, useState } from "react";
import { Plus } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { addTask, updateTask, deleteTask,setData } from "./redux/todoSlice.js";

export default function TodoPage() {
  let [todo, setTodo] = useState("");
  let [index, setIndex] = useState(null);
  let [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{    
    dispatch(setData());
  },[])

  const todoData = useSelector((store) => {
    return store.todoSlice.todoData;
  });
  const filteredItems = todoData.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const searhHandler = (e) => {
    setSearch(e);
  };

  const addHandler = () => {
    dispatch(addTask(todo));
    setTodo("");
  };

  const editHandler = (index, data) => {
    setTodo(data);
    setIndex(index);
  };

  const updateHandler = () => {
    let data = { index: index, newData: todo };
    dispatch(updateTask(data));
    setIndex(null);
    setTodo("");
  };

  const deleteHandler = (index) => {
    let confirmation = confirm("Do You want to delete..!");
    if (confirmation) {
      dispatch(deleteTask(index));
    }
  };
  return (
    <div className="w-1/3 mt-5">
      <p className="mb-1">Enter a Task</p>
      <div className="d-flex">
        <Input
          className="shadow-none rounded-end-0"
          placeholder="Enter a Task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        {index || index === 0 ? (
          <Button
            onClick={() => updateHandler()}
            color="danger"
            className="rounded-start-0"
          >
            Edit
          </Button>
        ) : (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => addHandler()}
          >
            <Plus />
          </Button>
        )}
      </div>

      <div className="w-full border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center mb-0">Task</h1>
        <Input
          className="shadow-none rounded-end-0 my-3"
          placeholder="Search here..."
          onChange={(e) => searhHandler(e.target.value)}
          value={search}
        />
        <hr className="mt-0" />
        {filteredItems?.map((e, i) => {
          return (
            <div className="d-flex" key={i}>
              <div className=" border mt-2 px-2 py-1 rounded-2">{i + 1}.</div>
              <div className="flex justify-between w-100 border mt-2 px-2 py-1 rounded-2">
                <h5>{e}</h5>
                <div className="[&_*]:underline">
                  <button
                    className="mr-2 hover:!text-red-500"
                    onClick={() => editHandler(i, e)}
                  >
                    Edit
                  </button>
                  <button
                    className="hover:!text-red-500"
                    onClick={() => deleteHandler(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
