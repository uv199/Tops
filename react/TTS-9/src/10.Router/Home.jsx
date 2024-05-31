import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";

let nameArr = ["saif", "urvish", "kajal", "nimesh"];
export default function Home() {
  const navigate = useNavigate();

  for (let i = 0; i < 1000000000; i++) {}

  return (
    <div className="d-flex flex-column ">
      <h1>Home</h1>

      <ul>
        {nameArr.map((e, i) => {
          return (
            <li
              key={i}
              className="text-capitalize"
              role="button"
              onClick={() => navigate(`/user/${e}/1`)}
            >
              {e}
            </li>
          );
        })}
        <li role="button" onClick={() => navigate("/user/saif")}>
          Saif
        </li>
      </ul>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}

/*
export default function Home() {
  let [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Input
        value={name}
        onChange={(e) => setName(e?.target?.value.replace(/[^0-9]/i, ""))}
      />
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </>
  );
}
*/
