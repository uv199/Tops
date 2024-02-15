import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseRedeucerCom() {
  const reducer = (state, action) => {
    if (action === "INC") {
      return state + 1;
    } else if (action === "DEC") {
      return state - 1;
    } else {
      return state;
    }
  };
  
  let [count, dispatch] = useReducer(reducer, { count: 1000 });

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => dispatch("INC")}>INC-1</Button>
      <Button onClick={() => dispatch("DEC")}>DEC-1</Button>
      <Button onClick={() => dispatch("galti")}>DEC-1</Button>
      {/* <Button onClick={()=>}>DEC-5</Button>
      <Button onClick={()=>}>INC-5</Button> */}
    </div>
  );
}

/*
export default function UseRedeucerCom() {
  let [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);
  const subOne = () => setCount(count - 1);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => addOne()}>INC-1</Button>
      <Button onClick={() => subOne()}>DEC-1</Button>
      <Button onClick={()=>}>DEC-5</Button>
      <Button onClick={()=>}>INC-5</Button> 
    </div>
  );
}
*/

/*
let x = {
    age:20
}

1. --> a.age = 30  
2.--> let x = {
    age :30
}


ans
x =  {
age :30
}

*/
