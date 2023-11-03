import React from "react";

export default function FunProps({ color, name, age }) {
  return (
    <>
      <h1 style={{ color: color }}>My name is {name}</h1>
      <h2>and my age is {age}</h2>
    </>
  );
}

// export default function FunProps(props) {
//   console.log("props--->", props);
//   return (
//     <>
//       <h1 style={{ color: props.color }}>My name is {props.name}</h1>
//       <h2>and my age is {props.age}</h2>
//     </>
//   );
// }
