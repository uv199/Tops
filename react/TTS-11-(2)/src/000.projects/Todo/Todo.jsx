import { Check, Edit, Trash, Undo2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Todo() {
  let [task, setTask] = useState("");
  let [pendingTask, setPendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [index, setIndex] = useState("");
  let [updatemode, setUpdatemode] = useState(true);
  let [pendingSelect, setPendingSelect] = useState([]);

  const taskEvent = (e) => {
    setTask(e.target.value);
  };

  const addCon = () => {
    if (task === "") {
      alert("Please enter your Task.");
    } else {
      setPendingTask((oldtask) => {
        return [...oldtask, task];
      });
      setTask("");
    }
  };

  const movedone = (index, e) => {
    setDoneTask([...doneTask, e]);

    setPendingTask((oldPendingTasks) => {
      return oldPendingTasks.filter((_, i) => i !== index);
    });
  };

  const movepending = (index, e) => {
    setPendingTask([...pendingTask, e]);

    setDoneTask((oldDoneTasks) => {
      return oldDoneTasks.filter((_, i) => i !== index);
    });
  };

  const deletehandler = (index) => {
    let filterdata = doneTask.filter((e, i) => i !== index);
    setDoneTask(filterdata);
  };

  const edithandler = (data, index) => {
    setTask(data);
    setIndex(index);
    setUpdatemode(false);
  };

  useEffect(() => {
    const storedPendingTasks =
      JSON.parse(localStorage.getItem("pendingTasks")) || [];
    const storedDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
    setPendingTask(storedPendingTasks);
    setDoneTask(storedDoneTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(pendingTask));
    localStorage.setItem("doneTasks", JSON.stringify(doneTask));
  }, [pendingTask, doneTask]);

  const updateCon = () => {
    let newData = pendingTask.map((e, i) => {
      if (i === index) {
        return task;
      } else {
        return e;
      }
    });
    setPendingTask(newData);
    setUpdatemode(true);
    setTask("");
  };

  return (
    <div className="mt-3">
      <Input onChange={taskEvent} value={task} placeholder="Enter Your Task" />

      {updatemode ? (
        <Button onClick={() => addCon()} color="danger" className="mt-2 w-100">
          Add
        </Button>
      ) : (
        <Button
          onClick={() => updateCon()}
          color="danger"
          className="mt-2 w-100"
        >
          Update
        </Button>
      )}

      <div className="d-flex gap-2">
        <div style={{ border: "1px solid black" }} className="mt-3 w-50 ">
          <h1 className="text-center">Pending Task</h1>
          <div>
            <ol>
              {pendingTask.map((e, i) => {
                return (
                  <li>
                    <span className="d-flex justify-content-between">
                      <Input
                        type="checkbox"
                        onChange={() => pendingCheckHandler(i)}
                      />
                      <p class="m-0">{e}</p>
                      <p class="m-0">
                        <Edit onClick={() => edithandler(e, i)} color="blue" />
                        <Check
                          onClick={() => movedone(i, e)}
                          color="#00ff1e"
                          role="button"
                        />
                      </p>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div style={{ border: "1px solid black" }} className="mt-3 w-50">
          <h1 className="text-center">Done Task</h1>
          <ol>
            {doneTask.map((e, index) => {
              return (
                <li key={index}>
                  <span className="d-flex justify-content-between">
                    <p className="m-0">{e}</p>
                    <p className="m-0">
                      <Undo2
                        onClick={() => movepending(index, e)}
                        role="button"
                      />
                      <Trash
                        onClick={() => deletehandler(index)}
                        role="button"
                        color="red"
                      />
                    </p>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
