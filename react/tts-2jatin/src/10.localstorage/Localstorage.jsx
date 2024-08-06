import { Button } from "@material-tailwind/react";
import React from "react";

export default function Localstorage() {
  let name = "Jatin";
  const setName = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };
  const setUser = () => {
    let user = { age: 23 };
    localStorage.setItem("user", JSON.stringify(user));
  };
  const removeName = () => {
    console.log();
    localStorage.removeItem("name");
  };
  const clearLS = () => {
    console.log();
    localStorage.clear();
  };
  const GetUser = () => {
    console.log();
    let data = localStorage.getItem("user");
    let normalData = JSON.parse(data);
  };
  return (
    <div>
      <Button onClick={() => setName()}>setname</Button>
      <Button onClick={() => setUser()}>SetUser</Button>
      <Button onClick={() => removeName()}>Remove Name</Button>
      <Button onClick={() => clearLS()}>clear LS</Button>
      <Button onClick={() => GetUser()}>GetUser</Button>
    </div>
  );
}

/*
// C R U D


// to set data in LS
let obj = { a: 20, b: 40 };
localStorage.setItem("user", JSON.stringify(obj));

// to get data from LS
let data = localStorage.getItem("user");

// to update data in LS
// let obj = { a: 20, b: 40 };
localStorage.setItem("user", JSON.stringify("newData"));

// to remove one data from LS
localStorage.removeItem("user");

// to remove all data from LS
localStorage.clear();

*/
