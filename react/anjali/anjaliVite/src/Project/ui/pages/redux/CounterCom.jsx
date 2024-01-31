import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  incCount,
  incCount_2,
  inc_by_user_input,
} from "../../../redux/fetures/count";
// let store = {
//   countReducer: { count: 1999 },
// };

export default function CounterCom() {
  let [num, setNum] = useState(0);

  let data = useSelector((state) => {
    console.log("------>", state);
    return state.countReducer?.count;
  });

  const dispatch = useDispatch();
  const addNum = () => {
    dispatch(inc_by_user_input(+num));
    setNum("");
  };
  return (
    <div>
      <h1>Counter is {data}</h1>
      <Button color="danger" onClick={() => dispatch(incCount())}>
        Inc-1
      </Button>
      <Button color="danger" onClick={() => dispatch(incCount_2())}>
        Inc-2
      </Button>
      <hr />
      <Input
        placeholder="Please add some no"
        type="number"
        value={num}
        onChange={(e) => setNum(e?.target?.value)}
      />
      <Button color="danger" onClick={addNum}>
        Add Num
      </Button>
    </div>
  );
}
