import { Button } from "reactstrap";
import React from "react";

/*
//  props destructuring
export default function FunProps({ name, age }) {
  return (
    <div>
      <h1>My name is {name}</h1>
      <h3>and my age is {age}</h3>
    </div>
  );
}
*/

export default function FunProps(props) {
  const addAge = () => {
    props.age = props.age + 5; //Cannot assign to read only property 'age' of object'
  };
  return (
    <div>
      <h1>My name is {props?.name}</h1>
      <h3>and my age is {props?.age}</h3>
      <Button onClick={() => addAge()} color="danger">
        Age+5
      </Button>
    </div>
  );
}
/*
// reusable
function sum() {
  return 10 + 10;
}

// dynemic reusable
function sum(a, b) {
  return a + b;
}
*/


/*

my name is uvrvish

camle = myNameIsUrvish --> variable/function
pascal = MyNameIsUrvish --> class Name / componenet
snake = my_name_is_urvish --> folderName + variable
 */
