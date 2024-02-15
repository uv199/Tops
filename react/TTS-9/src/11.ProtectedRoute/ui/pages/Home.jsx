import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();
  let [check, setCheck] = useState([]);

  const checkHandler = (item) => {
    const matchItem = check?.includes(item);
    if (matchItem) {
      let filter = check?.filter((e) => e !== item);
      setCheck(filter);
    } else {
      setCheck([...check, item]);
    }
  };
  return (
    <div className="d-flex flex-column ">
      <h1>Home</h1>
      {check.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
      <Input
        checked={check?.includes("h1")}
        onClick={() => checkHandler("h1")}
        type="checkbox"
      />
      <Label check>h1</Label>
      <Input
        checked={check?.includes("h2")}
        onClick={() => checkHandler("h2")}
        type="checkbox"
      />
      <Label check>h2</Label>
      <Input
        checked={check?.includes("h3")}
        onClick={() => checkHandler("h3")}
        type="checkbox"
      />
      <Label check>h3</Label>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
