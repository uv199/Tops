import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./input.css";

export default function InputCom() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

  // to get input value
  function getData(e) {
    setName(e.target.value);
  }

  // to add input value to array
  function addData() {
    console.log("----->");
    setArr([...arr, name]); // we use spred opr. for copy old arr and also add new ele
    setName("");
    console.log("arr:", arr);
  }

  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Name : </label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name} // to blank value of input
          id="name"
          placeholder="Please enter your name"
        />
        <Button onClick={() => addData()} variant="primary">
          Add Name
        </Button>
      </div>
      {arr.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}

// let a = [1,2,3]

// a=[...a,4]
// a?
