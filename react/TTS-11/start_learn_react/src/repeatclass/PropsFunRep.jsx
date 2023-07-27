import React from "react";

export default function PropsFunRep(props) {
  {
    console.log("props", props.data);
  }
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
    </div>
  );
}
