import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import "./Todo.css";
import { CheckCircle, Trash } from "lucide-react";

function HeaderCom1() {
  const [data, setData] = useState(false);
  const [allTodo, setNewTodo] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = () => {
    let newTodoItem = { title: newTitle };
    let updateTodoArr = [...allTodo];
    updateTodoArr.push(newTodoItem);
    localStorage.setItem("todolist", JSON.stringify(updateTodoArr));
  };

  return (
    <div className="header">
      <h1 className="text-center">Task</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <h3 className="text-center">TODO-LIST</h3>
          <div className="todo-input-item d-flex">
            <Input
              placeholder="Text here......"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button color="danger" onClick={handleSubmit}>
              Add
            </Button>
          </div>
        </div>

        <div className="btn-area mt-3">
          <Button color="success" onClick={() => setData(false)}>
            TODO
          </Button>
          <Button color="danger" onClick={() => setData(true)}>
            Completed
          </Button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div className="btn-todo">
              <CheckCircle role="button" color="rgb(0,230,122)" />
              <Trash role="button" color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCom1;
