import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incByValue, incrementCount } from "../redux/countSlice";

export default function Home() {
  let [no, setNo] = useState("");

  let data = useSelector((store) => {
    return store.COUNT;
  });

  let dispatch = useDispatch();

  const addNo = () => {
    dispatch(incByValue(no));
    setNo("");
  };
  return (
    <div>
      <h1>Count is {data.count}</h1>
      <Button onClick={() => dispatch(incrementCount())}>Inc</Button>
      <hr />
      <input
        value={no}
        className="border py-1 px-2 rounded-md"
        type="number"
        onChange={(e) => setNo(e?.target?.value)}
      />
      <Button onClick={() => addNo()}>Inc</Button>
    </div>
  );
}
