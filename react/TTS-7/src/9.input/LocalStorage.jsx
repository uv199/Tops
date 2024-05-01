import React from "react";
import { Button } from "reactstrap";

export default function LocalStorage() {
  //  add data into local storage
  const addName = () => {
    localStorage.setItem("name", "urvish");
  };
  const addAge = () => {
    localStorage.setItem("age", JSON.stringify({ age: 23 }));
  };

  //  get data from local storage
  const getAge = () => {
    let jsonString = localStorage.getItem("age");
    console.log("-----------  jsonString----------->", jsonString);
  };

  // update data into local storage
  const updateAge = () => {
    localStorage.setItem("age", JSON.stringify({ age: 50 }));
  };

  // delete one
  const deleteOne = () => {
    localStorage.removeItem("age");
  };
  
  // delete All
  const deleteAll = () => {
    localStorage.clear();
  };

  return (
    <div className="flex gap-3">
      <Button onClick={addName}>Add name</Button>
      <Button onClick={addAge}>Add Age</Button>
      <Button onClick={getAge}>Get Age</Button>
      <Button onClick={updateAge}>update Age</Button>
      <Button onClick={deleteOne}>Delete Age</Button>
      <Button onClick={deleteAll}>Delete All</Button>
    </div>
  );
}
