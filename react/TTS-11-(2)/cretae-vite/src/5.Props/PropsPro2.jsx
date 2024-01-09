import React, { useState } from "react";
import { Button } from "reactstrap";

// to chnage props value
export default function PropsPro2({ color }) {
  let [color2, setColor2] = useState(color);

  const chnageToBlack = () => {
    setColor2("red");
  };

  return (
    <div>
      <div
        className="m-3 d-flex  justify-content-center align-items-center "
        style={{ width: "200px", height: "200px", background: color2 }}
      >
        <h1>{color2}</h1>
      </div>
      <Button color="danger" onClick={() => chnageToBlack()}>
        Do Black
      </Button>
    </div>
  );
}
