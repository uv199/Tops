import React from "react";
import HOC from "./HOC";
import { Button } from "reactstrap";

function Count({ count, setCount }) {
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        Inc
      </Button>
    </div>
  );
}
export default HOC(Count);
