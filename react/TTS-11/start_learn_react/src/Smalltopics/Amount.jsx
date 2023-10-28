import React from "react";
import HOC from "./HOC";
import { Button } from "reactstrap";

function Amount({ count, setCount }) {
  return (
    <div>
      <h1>Amount is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        Inc
      </Button>
    </div>
  );
}

export default HOC(Amount);
