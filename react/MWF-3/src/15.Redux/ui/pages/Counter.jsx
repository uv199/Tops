import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  incByInput,
  incByTen,
  incrementOne,
} from "../../Redux/features/counter";
import { Plus } from "lucide-react";

export default function Counter() {
  let [num, setNum] = useState(0);

  let data = useSelector((store) => {
    return store?.countReducer?.count;
  });

  let dispatch = useDispatch();

  const sum = () => {
    dispatch(incByInput(+num));
    setNum("");
  };
  return (
    <div className="d-flex gap-3 flex-column">
      <h1>Counter is {data}</h1>
      <Button color="danger" onClick={() => dispatch(incrementOne())}>
        Inc-1
      </Button>
      <Button color="danger" onClick={() => dispatch(incByTen())}>
        Inc-10
      </Button>
      <hr style={{ width: "100%" }} />
      <div className="d-flex">
        {/* <h1>no - {num}</h1> */}
        <Input
          className="rounded-0"
          placeholder="Enter number"
          type="number"
          value={num}
          onChange={(e) => setNum(e?.target?.value)}
        />
        <Button color="danger" className="rounded-0" onClick={() => sum()}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
