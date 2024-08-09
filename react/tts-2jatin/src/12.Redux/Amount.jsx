import { Button } from "@material-tailwind/react";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAmt } from "./redux/Slice/amountSlice";

export default function Amount() {
  let data = useSelector((store) => {
    return store.amountSlice;
  });
  const dispatch = useDispatch();
  return (
    <div className="border p-4 m-4 border-black rounded-md">
      <h1 className="text-3xl">Amount is {data.amount}</h1>
      <div className="flex justify-between mt-3">
        <Button onClick={() => dispatch(incrementAmt())}>
          <Plus />
        </Button>
        <Button onClick={() => {}}>
          <Minus />
        </Button>
      </div>
    </div>
  );
}
