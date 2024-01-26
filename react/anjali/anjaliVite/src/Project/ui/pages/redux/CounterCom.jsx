import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incCount, incCount_2 } from "../../../redux/fetures/count";
// let store = {
//   countReducer: { count: 1999 },
// };

export default function CounterCom() {
  let data = useSelector((state) => {
    console.log("------>", state);
    return state.countReducer?.count;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter is {data}</h1>
      <Button color="danger" onClick={() => dispatch(incCount())}>
        Inc-1
      </Button>
      <Button color="danger" onClick={() => dispatch(incCount_2())}>
        Inc-2
      </Button>
    </div>
  );
}
