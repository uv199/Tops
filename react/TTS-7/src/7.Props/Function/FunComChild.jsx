import React from "react";
import { Button } from "reactstrap";

export default function FunComChild(props) {
  const chnageName = () => {
    props.person = "User";
  };
  return (
    <div>
      <h1>Good Morning {props.person}</h1>
      <h3>age : {props.age}</h3>
      <Button onClick={() => chnageName()}>Chnage name</Button>
    </div>
  );
}

// PROPS DESTRUCTURING
// export default function FunComChild({ person, age }) {
//   return (
//     <div>
//       <h1>Good Morning {person}</h1>
//       <h3>age : {age}</h3>
//     </div>
//   );
// }
