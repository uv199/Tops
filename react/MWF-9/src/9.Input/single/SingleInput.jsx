import React, { useState } from "react";
import { Button } from "reactstrap";

export default function SingleInput() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

  function getData(e) {
    setName(e?.target?.value);
  }
  function addNameToArr() {
    setArr([...arr, name]);
    setName("manoj");
  }
  console.log("---arr----", arr);
  return (
    <>
      <div className="d-flex flex-column gap-2">
        <h1>Name is {name}</h1>
        <label htmlFor="name">Name : </label>
        <input
          value={name}
          id="name"
          type="text"
          onChange={(e) => getData(e)}
        />
        <Button color="danger" onClick={() => addNameToArr()}>
          Add Name
        </Button>

        {arr.map((e, i) => {
          return (
            <h3 key={i}>
              {i + 1}. my name is {e}
            </h3>
          );
        })}
      </div>
    </>
  );
}
