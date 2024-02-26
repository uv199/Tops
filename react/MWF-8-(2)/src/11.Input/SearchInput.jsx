import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function SearchInput() {
  let [task, setTask] = useState("");
  let [searchTxt, setSearchTxt] = useState("");
  let [taskArr, setTaskArr] = useState([]);

  useEffect(() => {
    let jsonData = localStorage.getItem("todos") || "[]";
    let normalData = JSON.parse(jsonData);
    // ["urvish","jaymin","jay","sinu"]
    let data = normalData.filter((e) => e.includes(searchTxt));
    setTaskArr(data);
  }, [searchTxt]);

  // to add inputed data into array
  const addData = () => {
    if (task !== "") {
      setTaskArr([...taskArr, task]);
      localStorage.setItem("todos", JSON.stringify([...taskArr, task]));
      setTask("");
    } else {
      toast.warn("Please fill some data");
    }
  };

  return (
    <div className="d-flex flex-column align-content-center">
      <div className="w-100 d-flex   justify-content-center ">
        <Input
          name="nameInput"
          className="w-25 rounded-end-0 "
          placeholder="Enter Your Task Here"
          onChange={(e) => setTask(e?.target?.value)}
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
          <Input
            name="nameInput"
            className="w-100 mb-2"
            placeholder="Search Your Task Here"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
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
                      {i + 1}. {e}
                    </li>
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

// let all = ["abc","uv","test","sinu"]
// d = all.filter((e)=>e.includes(""))
// let d = [,"uv","sinu"]
// d.map()
