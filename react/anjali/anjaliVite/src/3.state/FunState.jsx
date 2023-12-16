import React, { useState } from "react";
import { Button } from "reactstrap";

export default function FunState() {
  let colorArr = ["red", "black", "yellow"];
  let [count, setCount] = useState(1000);
  let [color, setColor] = useState(null);

  let x = 0;
  const incrementX = () => {
    x++;
    console.log("-----------x----------->", x);
  };

  const incCount = () => {
    // count = count + 1; // can't change value directly
    setCount(count + 1);
    // console.log("-----------count----------->", count);
  };

  return (
    <div>
      <h1>{x}</h1>
      FunState
      <Button onClick={() => incrementX()}>INC</Button>
      <hr />
      <h1>Count is {count}</h1>
      <Button onClick={() => incCount()}>INC-COUNT</Button>
      <hr />
      <div
        style={{
          backgroundColor: color ?? "black",
          height: "100px",
          width: "100px",
        }}
      >
        test
      </div>
      <Button onClick={() => setColor("red")}>INC-COUNT</Button>
    </div>
  );
}

/*
name() it will run 
function name(params) {
    
}

name2() 
const name2 = function(){

}

const fatArrow = ()=>{

}


let user = {
    name:"urvish",
    printName:()=>{
         console.log("-----------name----------->", this.name); // print undfined 
    },
    printNameNormalFun:function(){
         console.log("-----------name----------->", this.name); // name will print
    },
}

function sum(a, b) {
    return a + b;
}

function printSum(total) {
    total(12,8)   
  console.log("total is ", total);
}

printSum(sum(12,8));

*/
