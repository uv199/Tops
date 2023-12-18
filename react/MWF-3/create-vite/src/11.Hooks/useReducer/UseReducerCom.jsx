import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducerCom() {
  // let [count, setCount] = useState(0);
  function reducer(state, action) {
    console.log("-----------  action----------->", action);
    let a = 15;
    let b = 3;
    if (action.actionType === "sum") {
      return { ans: action.a + action.b };
    } else if (action === "sub") {
      return { ans: a - b };
    } else {
      return state;
    }
  }
  let [obj, setObj] = useReducer(reducer, { ans: "not selected" });
  console.log("-----------  obj----------->", obj);
  return (
    <div>
      <h1>Ans is {obj.ans}</h1>
      <Button onClick={() => setObj({ actionType: "sum", a: 10, b: 20 })}>
        Sum
      </Button>
      <Button onClick={() => setObj("sub")}>Sub</Button>
      <Button onClick={() => setObj("INC_5")}>INC-5</Button>
      <Button>DEC-4</Button>
    </div>
  );
}

/*
export default function UseReducerCom() {
  // let [count, setCount] = useState(0);
  function reducer(state, action) {
    if (action === "INC_1") {
      return { count: state.count + 1 };
    } else {
      return state;
    }
  }
  let [obj, setObj] = useReducer(reducer, { count: 100 });
  console.log("-----------  obj----------->", obj);
  return (
    <div>
      <h1>Count is {obj.count}</h1>
      <Button onClick={() => setObj("INC_1")}>INC-1</Button>
      <Button onClick={() => setObj("INC_")}>INC-2</Button>
      <Button onClick={() => setObj("INC_5")}>INC-5</Button>
      <Button>DEC-4</Button>
    </div>
  );
}
*/
/*
sub 
sum 
dev
mul


*/

/*
export default function UseReducerCom() {
  // let [count, setCount] = useState(0);
  function reducer(state, action) {
    console.log("-----------  action----------->", action);
    console.log("-----------  state----------->", state);
    if (action === "INC_2") {
      return state + 2;
    } else if (action === "INC_1") {
      return state + 1;
    } else if (action === "INC_5") {
      return state + 5;
    } else {
      return state;
    }
  }
  let [count, setCount] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount("INC_1")}>INC-1</Button>
      <Button onClick={() => setCount("INC_")}>INC-2</Button>
      <Button onClick={() => setCount("INC_5")}>INC-5</Button>
      <Button>DEC-4</Button>
    </div>
  );
}*/
// let x = {
//   count: 0,
// };

// x.count = 2;
// x = x.count + 1;

// x = {
//   count: 2,
// };


//---------------------task--------------------
// let [user,disptach] = useReducer(reducer, {email:"",password:"" });
// <h1>{user.email}</h1>
// <h1>{user.password}</h1>

// input for name 
// add name btn

// input for password 
// add password btn
