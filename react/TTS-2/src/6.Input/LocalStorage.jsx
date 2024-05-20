import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";

export default function LocalStorage() {
  let [name, setName] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("name");
    setName(data);
  }, []);

  const setNameHandle = () => {
    localStorage.setItem("name", "Urvish");
  };

  const setAge = () => {
    localStorage.setItem("age", "25");
  };

  const updateName = () => {
    localStorage.setItem("name", "Disha");
  };

  const getName = () => {
    let data = localStorage.getItem("name");
    console.log("-----------  data----------->", data);
    setName(data);
  };

  // remove age

  const removeAge = () => {
    localStorage.removeItem("age");
  };

  const removeAll = () => {
    localStorage.clear();
  };

  return (
    <div>
      <h1>name : {name}</h1>
      <Button onClick={() => setNameHandle()}>Add name</Button>
      <Button onClick={() => setAge()}>Add age</Button>
      <Button onClick={() => updateName()}>update name</Button>
      <Button onClick={() => getName()}>get name</Button>
      <Button onClick={() => removeAge()}>remove Age</Button>
      <Button onClick={() => removeAll()}>remove All</Button>
    </div>
  );
}
// to store data =>  localStorage.setItem("key name","data in string")
// to update data =>  localStorage.setItem("key name which key you want to update","new data in string")
// remove one key => localStorage.removeItem("key name")
// remove all key => localStorage.clear()
// to get data => localStorage.getItem("key name")
