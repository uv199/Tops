import React from "react";

export default function FunProps(props) {
  // props.name = "hello"; // give err cant change propps value
  
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
