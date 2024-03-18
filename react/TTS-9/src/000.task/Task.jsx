import React from "react";

const Task = () => {
  return <div>Task</div>;
};
const Main = () => {
  return (
    <div>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

// [2000,500,400,100,50,20,10,5,2,1]

// 583
// 1417 => 5-2,2-2,10-1,5-1,2-1
let returnMoney = 1417;
let moneyReturn = { 500: 2, 200: 2 };
arr.map((e) => {
  // remainmoney>0
  if (e < returnMoney) {
    let remainmoney = returnMoney % e;
    // 500
    // 417
    //1417-417 = 1000/500 => 2
    // 200
    // 417-400 = 17 400/200 =>2

    moneyReturn[e] = 2;
    returnMoney = remainmoney;
  }
});


// 1200 => 3
// 52 1

// dp


