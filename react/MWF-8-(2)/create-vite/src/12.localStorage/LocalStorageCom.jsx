import React from "react";
import { Button } from "reactstrap";

export default function LocalStorageCom() {
  // set data into local storage (Object)
  const setName = () => {
    let data = { name: "urvish" };
    let jsonString = JSON.stringify(data);
    localStorage.setItem("name", jsonString);
  };
  // set data into local storage
  const setAge = () => {
    localStorage.setItem("age", "23");
  };

  // update data into local storage
  const updateName = () => {
    let data = { name: "vishal" };
    let jsonString = JSON.stringify(data);
    localStorage.setItem("name", jsonString);
  };

  // remove single data into local storage
  const removeName = () => {
    localStorage.removeItem("name");
  };

  // remove all data into local storage
  const removeAll = () => {
    localStorage.clear();
  };
  const getData = () => {
    let data = localStorage.getItem("name");
    console.log("-----------  data----------->", data);
    let normalData = JSON.parse(data)
    console.log("-----------  normalData----------->", normalData)
  };
  return (
    <div className="d-flex gap-2">
      <Button onClick={() => setName()}>Set Name</Button>
      <Button onClick={() => setAge()}>Set age</Button>
      <Button onClick={() => updateName()}>update name</Button>
      <Button onClick={() => removeName()}>remove name</Button>
      <Button onClick={() => removeAll()}>Remove All</Button>
      <Button onClick={() => getData()}>get Data</Button>
    </div>
  );
}
