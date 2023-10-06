import React from "react";

export default function PropsFunCom(props) {
  console.log("props", props);
  return (
    <div>
      <h1>Hello world...</h1>
      <h1>My name is {props.name}</h1>
      <h2>My age is {props.age}</h2>
    </div>
  );
}

// export default function PropsFunCom({ name, age }) {
//   return (
//     <div>
//       <h1>Hello world...</h1>
//       <h1>My name is {name}</h1>
//       <h2>My age is {age}</h2>
//     </div>
//   );
// }
