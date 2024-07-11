import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

// state is a data storage of a componenet

export default function FunState() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  const incHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>count is {count}</h1>
      <Button onClick={() => incHandler()}>Inc-count</Button>
      <Button onClick={() => setCount(count - 1)}>Dec-count</Button>
      {/* <Button onClick={incHandler}>Inc-x</Button> */}
    </div>
  );
}

// export default function FunState() {
//   let x = 0;

//   const incHandler = (abc) => {
//     x++;
//     console.log("-----------  x----------->", x);
//   };

//   return (
//     <div>
//       <h1>x is {x}</h1>
//       <Button onClick={()=>incHandler()}>Inc-x</Button>
//       {/* <Button onClick={incHandler}>Inc-x</Button> */}
//     </div>
//   );
// }
