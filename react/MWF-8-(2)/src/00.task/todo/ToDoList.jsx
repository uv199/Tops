import { BadgeCheck, Pencil, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Card as ReactCard,
} from "reactstrap";

export default function TodoProject() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [completedTaskArr, setCompletedTaskArr] = useState([]);
  const [index, setIndex] = useState(null);
  const [pendingSelectedTasks, setPendingSelectedTasks] = useState([]);
  const [completedSelectedTasks, setCompletedSelectedTasks] = useState([]);

  useEffect(() => {
    let pendingTaskJsonData = localStorage.getItem("PendingTask");
    let pendingTaskNormalData = JSON.parse(pendingTaskJsonData) || [];
    setTaskArr(pendingTaskNormalData);

    let completedTaskJsonData = localStorage.getItem("CompletedTask");
    let completedTaskNormalData = JSON.parse(completedTaskJsonData) || [];
    setCompletedTaskArr(completedTaskNormalData);
  }, []);

  let valueArr = Object.values(task);
  let empty = valueArr.includes("");

  const addTask = (e) => {
    e.preventDefault();

    if (!empty) {
      setTaskArr([task, ...taskArr]);

      localStorage.setItem("PendingTask", JSON.stringify([task, ...taskArr]));
      setTask("");
    } else {
      toast.warn("Please add task");
    }
  };
  // console.log("taskArr: ", taskArr);

  const addPendingTaskToCompletedTask = (e, index) => {
    // console.log("e, index", e, index);

    setCompletedTaskArr([e, ...completedTaskArr]);
    localStorage.setItem(
      "CompletedTask",
      JSON.stringify([e, ...completedTaskArr])
    );

    let pendingTaskArr = taskArr.filter((e, i) => i != index);
    // console.log("pendingTaskArr: ", pendingTaskArr);
    setTaskArr(pendingTaskArr);
    localStorage.setItem("PendingTask", JSON.stringify(pendingTaskArr));
  };
  // console.log("taskArr: ", taskArr);
  // console.log("completedTaskArr: ", completedTaskArr);

  const deleteHandler = (index) => {
    let filterData = completedTaskArr.filter((e, i) => i != index);
    setCompletedTaskArr(filterData);
    localStorage.setItem("CompletedTask", JSON.stringify(filterData));
  };

  const updateHandler = (e, i) => {
    // console.log("e, i : ", e, i);
    setTask(e);
    setIndex(i);
  };

  const updateTask = (e) => {
    e.preventDefault();

    if (!empty) {
      taskArr.splice(index, 1, task);
      setTaskArr([...taskArr]);
      localStorage.setItem("PendingTask", JSON.stringify([...taskArr]));
      setIndex(null);
      setTask("");
    }
  };
  // console.log("taskArr: ", taskArr);

  const handlePendingTaskSelection = (i, isChecked) => {
    // console.log("isChecked: ", isChecked);
    if (isChecked) {
      setPendingSelectedTasks([...pendingSelectedTasks, i]);
    } else {
      let filterPendingUnselectedData = pendingSelectedTasks.filter(
        (index) => index !== i
      );
      setPendingSelectedTasks(filterPendingUnselectedData);
    }
  };
  // console.log("pendingSelectedTasks: ", pendingSelectedTasks);

  const addSelectedPendingTaskToCompletedTask = () => {
    let selectedPendingTasks = taskArr.filter((e, i) => {
      return pendingSelectedTasks.includes(i);
    });
    setCompletedTaskArr([...selectedPendingTasks, ...completedTaskArr]);
    localStorage.setItem(
      "CompletedTask",
      JSON.stringify([...selectedPendingTasks, ...completedTaskArr])
    );

    let restPendingTasks = taskArr.filter((e, i) => {
      return !pendingSelectedTasks.includes(i);
    });
    setTaskArr(restPendingTasks);
    localStorage.setItem("PendingTask", JSON.stringify(restPendingTasks));

    setPendingSelectedTasks([]);
  };

  const handleCompletedTaskSelection = (i, isChecked) => {
    if (isChecked) setCompletedSelectedTasks([...completedSelectedTasks, i]);
    else {
      let filterCompletedUnselectedData = completedSelectedTasks.filter(
        (index) => index != i
      );
      setCompletedSelectedTasks(filterCompletedUnselectedData);
    }
  };

  const addSelectedCompletedTaskToPendingTask = () => {
    let selectedCompletedTasks = completedTaskArr.filter((e, i) => {
      return completedSelectedTasks.includes(i);
    });
    setTaskArr([...selectedCompletedTasks, ...taskArr]);
    localStorage.setItem(
      "PendingTask",
      JSON.stringify([...selectedCompletedTasks, ...taskArr])
    );

    let restCompletedTasks = completedTaskArr.filter((e, i) => {
      return !completedSelectedTasks.includes(i);
    });
    setCompletedTaskArr(restCompletedTasks);
    localStorage.setItem("CompletedTask", JSON.stringify(restCompletedTasks));

    // clear pendingSelectedTasks
    setCompletedSelectedTasks([]);
  };

  const pendingSelectAll = (e) => {
    if (e.target.checked) {
      let allIndex = taskArr.map((e, i) => i);
      setPendingSelectedTasks(allIndex);
    } else {
      setPendingSelectedTasks([]);
    }
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h6>Task: {task}</h6>
            <h6>Index: {index}</h6>
            <div className="d-flex align-items-center gap-2">
              <Input
                placeholder="Add Task Here"
                value={task}
                onChange={(e) => setTask(e?.target?.value)}
              />
              {index || index === 0 ? (
                <Button
                  className="w-100"
                  color="primary"
                  onClick={(e) => updateTask(e)}
                >
                  Update
                </Button>
              ) : (
                <Button color="primary" onClick={(e) => addTask(e)}>
                  <Plus />
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <ReactCard>
              <CardBody>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <CardTitle tag="h5" className="text-center">
                      Pending Task
                    </CardTitle>
                  </div>
                  <div className="col-md-3 d-flex justify-content-end">
                    <FormGroup check>
                      <Input
                        id="pendingTaskCheckbox"
                        type="checkbox"
                        checked={
                          taskArr.length > 0 &&
                          taskArr.length === pendingSelectedTasks.length
                        }
                        onChange={(e) => pendingSelectAll(e)}
                      />
                      <Label for="pendingTaskCheckbox">Select All</Label>
                    </FormGroup>
                  </div>
                </div>
                <ReactCard>
                  <ListGroup flush>
                    {taskArr?.map?.((e, i) => {
                      return (
                        <ListGroupItem
                          className="d-flex align-items-center justify-content-between"
                          key={i}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <Input
                              type="checkbox"
                              checked={pendingSelectedTasks.includes(i)}
                              onChange={(e) =>
                                handlePendingTaskSelection(
                                  i,
                                  e?.target?.checked
                                )
                              }
                            />
                            <span>
                              {i + 1}. {e}
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <Pencil
                              role="button"
                              size={20}
                              color="#0d6efd"
                              onClick={() => updateHandler(e, i)}
                            />
                            <BadgeCheck
                              role="button"
                              size={25}
                              color="#198a1b"
                              onClick={() =>
                                addPendingTaskToCompletedTask(e, i)
                              }
                            />
                          </div>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </ReactCard>
                <Button
                  className="w-100 mt-3"
                  color="primary"
                  onClick={() => addSelectedPendingTaskToCompletedTask()}
                >
                  Move to Completed Task
                </Button>
              </CardBody>
            </ReactCard>
          </div>

          <div className="col-md-6">
            <ReactCard>
              <CardBody>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <CardTitle tag="h5" className="text-center">
                      Completed Task
                    </CardTitle>
                  </div>
                  <div className="col-md-3 d-flex justify-content-end">
                    <FormGroup check>
                      <Input id="completedTaskCheckbox" type="checkbox" />
                      <Label for="completedTaskCheckbox">Select All</Label>
                    </FormGroup>
                  </div>
                </div>
                <ReactCard>
                  <ListGroup flush>
                    {completedTaskArr?.map?.((e, i) => {
                      return (
                        <ListGroupItem
                          className="d-flex align-items-center justify-content-between"
                          key={i}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <Input
                              type="checkbox"
                              checked={completedSelectedTasks.includes(i)}
                              onChange={(e) =>
                                handleCompletedTaskSelection(
                                  i,
                                  e?.target?.checked
                                )
                              }
                            />
                            <span>
                              {i + 1}. {e}
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <Trash2
                              role="button"
                              size={20}
                              color="#ff0000"
                              onClick={() => deleteHandler(i)}
                            />
                          </div>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </ReactCard>
                <Button
                  className="w-100 mt-3"
                  color="primary"
                  onClick={() => addSelectedCompletedTaskToPendingTask()}
                >
                  Move to Pending Task
                </Button>
              </CardBody>
            </ReactCard>
          </div>
        </div>
      </div>
    </section>
  );
}
