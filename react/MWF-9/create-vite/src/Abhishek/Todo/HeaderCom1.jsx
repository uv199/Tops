import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import "./Todo.css";
import { CheckCircle2Icon, Trash } from "lucide-react";

function HeaderCom1() {
  const [isComplete, setIsComplete] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  const [newTitile, setNewTitle] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const handleSubmit = () => {
    let newTodoItem = {
      title: newTitile,
    };
    let updateTodoArr = [...allTodo];
    updateTodoArr.push(newTodoItem);
    setAllTodo(updateTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updateTodoArr));
  };

  const handleDelete = (i) => {
    let reducedTodo = [...allTodo];
    reducedTodo.splice(i);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setAllTodo(reducedTodo);
  };
  const handleCompleted = (i) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let completedOn = dd + "-" + mm + "-" + yyyy;
    let filterItem = {
      ...allTodo[i],
      completedOn: completedOn,
    };
    
    let updateCompletedArr = [...CompletedTodos];
    updateCompletedArr.push(filterItem);
    setCompletedTodos(updateCompletedArr);
    handleDelete(i);
    localStorage.setItem("completed", JSON.stringify(updateCompletedArr));

  };

  const  handleDeleteCompleted = (i)=>{
    let reducedTodo = [...CompletedTodos];
    reducedTodo.splice(i);

    localStorage.setItem("completed", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompleted =JSON.parse(localStorage.getItem("completed"));
    
    if (savedTodo) {
        setAllTodo(savedTodo);
    }

    if (savedCompleted){
      setCompletedTodos(savedCompleted)
    }

}, [])




    

  return (
    <div className="app">
      <h1>TODO-LIST</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <label>Task</label>
          <div className="todo-input-item d-flex">
            <Input
              placeholder="text here....."
              value={newTitile}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button className="btn-add" color="success" onClick={handleSubmit}>
              Add
            </Button>
          </div>
        </div>

        <div className="btn-area mt-3">
          <Button className="btn-todo" onClick={() => setIsComplete(false)}>
            Todo
          </Button>
          <Button className="btn-complete" color="success" onClick={() => setIsComplete(true)}>
            Completed
          </Button>
        </div>
        <div className="todo-list">
          {isComplete === false &&
            allTodo.map((item, i) => {
              return (
                <div className="todo-list-item" key={i}>
                  <h5>{item.title}</h5>
                  <div > 
                    <CheckCircle2Icon
                      role="button"
                      color="rgb(0,230,122)"
                      onClick={() => handleCompleted(i)}
                    />
                    <Trash
                      role="button"
                      color="red"
                      onClick={() => handleDelete(i)}
                    />
                  </div>
                </div>
              );
            })}

          {isComplete === true &&
            CompletedTodos.map((item, i) => {
              return (
                <div className="todo-list-item" key={i}>
                  <h5>{item.title}</h5>
                  <p>Completed On: {item.completedOn}</p>
                  <div>
                  
                    <Trash
                      role="button"
                      color="red"
                      onClick={() => handleDeleteCompleted(i)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default HeaderCom1;
