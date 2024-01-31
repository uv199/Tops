import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incByTen, incrementOne } from "../../Redux/features/counter";

export default function Counter() {
  let data = useSelector((store) => {
    return store?.countReducer?.count;
  });

  let dispatch = useDispatch();

  console.log("-----------  data----------->", data);
  return (
    <div>
      <h1>Counter is {data}</h1>
      <Button color="danger" onClick={() => dispatch(incrementOne())}>
        Inc-1
      </Button>
      <Button color="danger" onClick={() => dispatch(incByTen())}>
        Inc-10
      </Button>
    </div>
  );
}
