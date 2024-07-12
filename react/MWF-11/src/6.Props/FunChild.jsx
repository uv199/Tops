import { Button } from "@material-tailwind/react";
import React from "react";


// props desctructuring
export default function FunChild({ NAME }) {
  return (
    <div>
      <h1>My name is {NAME}</h1>
    </div>
  );
}

// export default function FunChild(props) {
//   console.log("-----------  props----------->", props);
//   //   props.NAME = "Jaymin"

//   const chnageNameHandler = () => {
//     props.NAME = "Jaymin Patel";
//   };
//   return (
//     <div>
//       <h1>My name is {props.NAME}</h1>
//       <Button onClick={() => chnageNameHandler()}>Chnage name</Button>
//     </div>
//   );
// }
