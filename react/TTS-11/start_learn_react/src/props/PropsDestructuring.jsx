import React from "react";

// export default function PropsDestructuring(props) {
export default function PropsDestructuring({ name, age }) {
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h1>{props.age}</h1> */}
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
}
