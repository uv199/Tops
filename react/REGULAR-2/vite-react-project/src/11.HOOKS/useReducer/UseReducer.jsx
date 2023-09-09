import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";

const intialvalue = { count1: 0, count2: 0 };
export default function UseReducer() {
  let [obj, dispatch] = useReducer(reducer, intialvalue);

  function reducer(state, action) {
    if (action === "incCount1") {
      return { ...state, count1: state.count1 + 1 };
    } else if (action === "incCount2") {
      return { ...state, count2: state.count2 + 1 };
    } else return state;
  }
  return (
    <>
      <h1>Count One is {obj.count1}</h1>
      <h1>Count Two is {obj.count2}</h1>
      <Button
        onClick={() => dispatch("incCount1")}
        className="ms-2"
        variant="primary"
      >
        Add-count-1
      </Button>
      <Button
        onClick={() => dispatch("incCount2")}
        className="ms-2"
        variant="primary"
      >
        Add-count-2
      </Button>
      <Button
        onClick={() => dispatch("incByFive")}
        className="ms-2"
        variant="primary"
      >
        add five
      </Button>
    </>
  );
}

// const intialvalue = 0;
// export default function UseReducer() {
//   let [count, dispatch] = useReducer(reducer, intialvalue);

//   function reducer(state, action) {
//     if (action === "increment") return state + 1;
//     if (action === "decrement") return state - 1;
//     if (action === "incByFive") return state + 5;
//   }
//   return (
//     <>
//       <h1>Count is {count}</h1>
//       <Button
//         onClick={() => dispatch("increment")}
//         className="ms-2"
//         variant="primary"
//       >
//         Add
//       </Button>
//       <Button
//         onClick={() => dispatch("decrement")}
//         className="ms-2"
//         variant="primary"
//       >
//         Sub
//       </Button>
//       <Button
//         onClick={() => dispatch("incByFive")}
//         className="ms-2"
//         variant="primary"
//       >
//         add five
//       </Button>
//     </>
//   );
// }
