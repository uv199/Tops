import { Button } from "@material-tailwind/react";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/Slice/countSlice";
/*
url
method
data

*/
useEffect(() => {
  async function fetch(params) {
    try {
      let response = await axios.get(url);
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  }
  fetch()
}, []);

export default function Count() {
  let data = useSelector((store) => {
    // console.log("-----------  store----------->", store);
    return store.COUNT;
  });

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };
  return (
    <div className="border p-4 m-4 border-black rounded-md">
      <h1 className="text-3xl">Count is {data.count}</h1>
      <div className="flex justify-between mt-3">
        <Button onClick={() => incrementHandler()}>
          <Plus />
        </Button>
        <Button onClick={() => dispatch(decrement())}>
          <Minus />
        </Button>
      </div>
    </div>
  );
}
