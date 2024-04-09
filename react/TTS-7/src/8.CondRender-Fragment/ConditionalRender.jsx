import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ConditionalRender() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      {count === 0 ? (
        <h3>Number is Zero</h3>
      ) : count % 2 === 0 ? (
        <h3>Number is Even</h3>
      ) : (
        <h3>Number is Odd</h3>
      )}

      <Button onClick={() => setCount(++count)}>Inc</Button>
    </div>
  );
}

// {count === 0 ? (zero) : count % 2 === 0 ? (even) : (odd )}

// export default function ConditionalRender() {
//   let age = 55;
//   if (age > 50) {
//     return <p>You are senior citizen you cant drinks</p>;
//   }
//   return (
//     <div>
//       <h1>age : {age}</h1>
//       {age > 18 ? (
//         <p className="text-success">You are above 18 you can drink</p>
//       ) : (
//         <p className="text-danger">You are below 18 you can not drink</p>
//       )}
//     </div>
//   );
// }
