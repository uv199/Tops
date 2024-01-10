import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function ConRendaring() {
  let [count, setCount] = useState(1);
  let [showPass, setShowPass] = useState(false);
  return (
    <div>
      <h1>Count is {count}</h1>
      {count % 2 === 1 ? <h1>{count} is odd</h1> : <h1>{count} is even </h1>}
      <Button onClick={() => setCount(count + 1)}>Inc</Button>

      <hr />

      {showPass && <h1>PassWord is showing</h1>}
      {/* {showPass ? <h1>PassWord is showing</h1> : null} */}
      <div className="d-flex justify-content-center gap-3">
        <Input className="w-25" type={showPass ? "text" : "password"} />
        {showPass ? (
          <Button color="danger" onClick={() => setShowPass(false)}>
            Hide Pass
          </Button>
        ) : (
          <Button color="danger" onClick={() => setShowPass(true)}>
            Show Pass
          </Button>
        )}
      </div>
      <hr />
    </div>
  );
}

// if(show){
// hide
// }else{
// show
// }
