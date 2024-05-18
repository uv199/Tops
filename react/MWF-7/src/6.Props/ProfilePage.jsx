import React, { useState } from "react";
import { Button } from "reactstrap";

// simple value

/*
export default function ProfilePage(props) {
  console.log("-----------  props----------->", props);

  // props is immutable means we can not chnage props value
  // props.name = "test";
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h3>Age : {props.age}</h3>
    </div>
  );
}
*/

// how to chnage props value
export default function ProfilePage(props) {
  let [age, setAge] = useState(props.age);

  const chnageAge = () => {
    setAge(age + 5);
  };
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h3>Age : {age}</h3>
      <Button onClick={() => chnageAge()}>Age after 5</Button>
    </div>
  );
}
