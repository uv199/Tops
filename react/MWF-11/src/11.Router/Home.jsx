import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  let user = { name: "urvish", age: 24 };

  const getUser = () => {
    let jsonData = localStorage.getItem("user");
    console.log("-----------  jsonData----------->", jsonData);
    let data = JSON.parse(jsonData);
    console.log("-----------  data----------->", data);
  };

  const updateStore = () => {
    localStorage.setItem("user", JSON.stringify(900));
  };

  return (
    <div className="min-h-screen bg-green-400 min-w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-5xl">Home</h1>
      <Button>
        <NavLink to={"/jg"}>Go to Profile</NavLink>
      </Button>

      <div className="flex gap-4 mt-4">
        <Button
          onClick={() => localStorage.setItem("user", JSON.stringify(user))}
        >
          SetUser
        </Button>
        <Button
          onClick={() => localStorage.setItem("user-2", JSON.stringify(user))}
        >
          SetUser-2
        </Button>
        <Button onClick={getUser}>GetUser</Button>
        <Button onClick={() => localStorage.removeItem("user")}>
          Remove User
        </Button>
        <Button onClick={() => localStorage.clear()}>Remove All User</Button>
        <Button onClick={() => updateStore()}>Update User</Button>
      </div>
    </div>
  );
}

/*
CRUD
C -> localstorage.setItem(keyName:string,value:string)
R -> localstorage.getItem(keyName)
U -> localstorage.setItem(old keyName , newData)
D -> localstorage.removeItem(keyName)
  -> localStorage.clear()

*/
