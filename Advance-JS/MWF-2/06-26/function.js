/*
function print(a, b) {
  console.log("-----------  a,b----------->", a, b);
  console.log("-----NORMAL-FUNCTION-----");
  return "hello world";
  console.log("-----NORMAL-FUNCTION-----");
}

let x = print(10, 10);
console.log("-----------  x----------->", x);

function sum(a, b) {
  let total = a + b;
  return { total: total };
}

let total = sum(90, 190);
console.log("-----------  total----------->", total);

// const print = ()=>{
  //   console.log("----FATE ARRROW FUN-----")
  // }
  const print = () => 1000;
  
  let x = print();
  console.log("-----------  x----------->", x);
  
  */

let user = {
  name: "urvish",
  print: () => {
    console.log("---->", this.name);
  },
  print2: function () {
    console.log("--normal-->", this.name);
  },
};

user.print();
user.print2();


//  optional chining
//  destructuring
//  rest spred 
