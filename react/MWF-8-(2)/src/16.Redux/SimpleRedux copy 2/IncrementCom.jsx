import { Button, Input } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCount,
  incrementByUser,
  incrementCount,
} from "./redux/fetures/counterSlice";
import { Plus } from "lucide-react";
export default function IncrementCom() {
  let [input, setInput] = useState("");
  console.log("-----------  input----------->", input)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCount());
  };

  // increment by using input
  const incrementByInput = () => {
    dispatch(incrementByUser(input));
    setInput("");
  };

  return (
    <div className="bg-red-300 p-3 w-[500px]">
      <h1>IncrementCom</h1>
      <Button onClick={() => incrementHandler()}>Inc-1</Button>
      <Button onClick={() => dispatch(decrementCount())}>Dec-1</Button>

      <div className="flex mt-2">
        <Input type="number" onChange={(e) => setInput(e?.target?.value)} />
        <Button onClick={() => incrementByInput()}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
