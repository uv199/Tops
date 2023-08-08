import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function LocalStorage() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("arr");
    if (data) {
      let normalData = JSON.parse(data);
      setArr([...normalData]);
    }
  }, []);
  // to get input value
  function getData(e) {
    setName(e.target.value);
  }

  function deleteAll(params) {
    setArr([]);
    // localStorage.clear();
    localStorage.removeItem("data");
  }

  // to add input value to array
  function addData() {
    setArr([...arr, name]);
    setName("");
    localStorage.setItem("arr", JSON.stringify([...arr, name]));
    localStorage.setItem("data", JSON.stringify([...arr, name]));
  }

  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Name : </label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name}
          id="name"
          placeholder="Please enter your name"
        />
        <Button onClick={() => addData()} variant="primary">
          Add Name
        </Button>
        <Button onClick={() => deleteAll()} variant="danger">
          Delete-All
        </Button>
      </div>
      {arr.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
