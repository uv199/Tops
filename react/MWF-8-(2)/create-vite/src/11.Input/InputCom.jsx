import { Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  // to get data from input
  const getData = (ele) => {
    setTask(ele?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    if (task !== "") {
      // ... to copy old data
      setTaskArr([...taskArr, task]);
      // to empty input after adding data
      setTask("");
    } else {
      toast.warn("Please fill some data");
    }
  };

  // handle delete
  const deleteHandler = (index) => {
    console.log("----->", index);
    let filterData = taskArr.filter((e, i) => i !== index);
    console.log("-----------  filterData----------->", filterData);
    setTaskArr(filterData);
  };

  return (
    <div className="d-flex flex-column align-content-center">
      {/* <h1>task is {task}</h1> */}
      <div className="w-100 d-flex   justify-content-center ">
        <Input
          name="nameInput"
          className="w-25 rounded-end-0 "
          placeholder="Enter Your Task Here"
          onChange={(e) => getData(e)}
          // we take task in value to controll input value
          value={task}
        />
        <Button
          color="danger"
          className="rounded-start-0"
          onClick={() => addData()}
        >
          <Plus />
        </Button>
      </div>
      <div className="w-100 d-flex justify-content-center pt-4">
        <div className="w-25 border rounded-2">
          <h1>TODO List</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {taskArr.map((e, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between m-2">
                    <li key={i}>
                      {i + 1}. {e}{" "}
                    </li>
                    <Trash
                      color="red"
                      role="button"
                      onClick={() => deleteHandler(i)}
                    />
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
let arr = [a,b,c,d]
let  index = 2


let filterData = arr.filter((e,i)=> i!==index)

 filterData = [a,b,d]
 arr = filterData

 arr ?  => [a,b,d]


*/
