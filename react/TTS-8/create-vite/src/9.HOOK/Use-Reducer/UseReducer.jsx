import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  const [no, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    console.log("action", action);
    switch (action.type) {
      case "INC-1":
        return { count: state.count + 1 };
      case "INC-2":
        return { count: state.count + 2 };
      case "INC-5":
        return { count: state.count + 5 };
      case "DEC-10":
        return { count: state.count - 10 };
      case "DEC_BY_VALUE":
        return { count: state.count - action.x };

      default:
        return state;
    }
  }
  console.log("----->", no);
  return (
    <>
      <div className="d-flex gap-2">
        <h1>Number is {no.count}</h1>
        <Button color="danger" onClick={() => dispatch({ type: "INC-1" })}>
          Inc-1
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "INC-2" })}>
          Inc-2
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "INC-5" })}>
          Inc-5
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "DEC-10" })}>
          Dec-10
        </Button>
        <Button
          color="danger"
          onClick={() => dispatch({ type: "DEC_BY_VALUE", x: 99 })}
        >
          Dec-By-Value
        </Button>
      </div>
    </>
  );
}

/*
import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  const [no, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    console.log("action", action);
    switch (action) {
      case "INC-1":
        return { count: state.count + 1 };
      case "INC-2":
        return { count: state.count + 2 };
      case "INC-5":
        return { count: state.count + 5 };
      case "DEC-10":
        return { count: state.count - 10 };
      default:
        return state;
    }
  }
  console.log("----->", no);
  return (
    <>
      <div className="d-flex gap-2">
        <h1>Number is {no.count}</h1>
        <Button color="danger" onClick={() => dispatch("INC-1")}>
          Inc-1
        </Button>
        <Button color="danger" onClick={() => dispatch("INC-2")}>
          Inc-2
        </Button>
        <Button color="danger" onClick={() => dispatch("INC-5")}>
          Inc-5
        </Button>
        <Button color="danger" onClick={() => dispatch("DEC-10")}>
          Dec-10
        </Button>
       
      </div>
    </>
  );
}
 */
