import React, { useState } from "react";
import { Button } from "reactstrap";

export default function MapKey() {
  let [color, setColor] = useState([1, 2, 3, 4]);
  const test = color.map((e, i) => {
    return <li key={i}>color is {e}</li>;
  });
  return (
    <div>
      <ul>{test}</ul>
      <Button onClick={() => setColor([5, 1, 2, 3, 4])}>Update Color</Button>
    </div>
  );
}
