import React, { useState } from "react";
import { Button } from "reactstrap";

export default function SingleInput2() {
  let [name, setname] = useState("");
  let [passname, setpassname] = useState("");
  let [arrname, setarrname] = useState([]);

  function getPassword(pass) {
    setpassname(pass.target.value);
  }
  function showName() {
    setarrname([...arrname, { name, passname }]);
    setname("");
  }
  return (
    <div>
      <h1>My Name is {name}</h1>
      <h1>My password is {passname}</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        onChange={(e) => setname(e?.target?.value)}
        value={name}
      />
      <label htmlFor="name">Password</label>
      <input type="password" onChange={(pass) => getPassword(pass)} />
      <br />
      <br />
      <Button onClick={() => showName()}>added Name</Button>
      {arrname.map((e, i) => {
        return (
          <>
            <h3 key={i}>my name is {e.name}</h3>
            <h3>my password is {e.passname}</h3>
          </>
        );
      })}
    </div>
  );
}
