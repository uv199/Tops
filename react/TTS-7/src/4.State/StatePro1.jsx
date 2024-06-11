import React, { useState } from "react";
import { Button } from "reactstrap";

export default function StatePro1() {
  const [index, setIndex] = useState(0);
  const color = ["red", "green", "yellow", "blue"];

  const indexHandler = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: color[index],
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>{index}</h1>
        <Button onClick={() => indexHandler()} color="dark">
          Change Color
        </Button>
      </div>
    </div>
  );
}
