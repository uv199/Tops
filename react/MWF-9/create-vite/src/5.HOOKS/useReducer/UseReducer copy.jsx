import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  let [count, setCount] = useState(0);

  function reducer(state, action) {
    console.log("state", state);
    console.log("action", action);
    if (action === "INC-1") {
      return { number: state.number + 1 };
    } else if (action === "INC-2") {
      return { number: state.number + 2 };
    }
    return state;
  }

  let [value, dispatch] = useReducer(reducer, { number: 999 });
  console.log("value", value);

  return (
    <>
      <h1>UseReducer</h1>
      {/* <h1>Count is {count}</h1>
      <Button
        color="danger"
        className="m-3"
        onClick={() => setCount(count + 1)}
      >
        INC-1
      </Button>
      <Button
        color="danger"
        className="m-3"
        onClick={() => setCount(count + 2)}
      >
        INC-2
      </Button>
      <Button
        color="danger"
        className="m-3"
        onClick={() => setCount(count + 3)}
      >
        INC-3
      </Button> */}

      <h1>Amount is {value.number}</h1>
      <Button color="danger" className="m-3" onClick={() => dispatch("INC-1")}>
        INC-1
      </Button>
      <Button color="danger" className="m-3" onClick={() => dispatch("INC-2")}>
        INC-2
      </Button>
    </>
  );
}
