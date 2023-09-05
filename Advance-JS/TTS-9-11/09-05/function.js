fun1();

function fun1(a, b) {
  console.log("------fun1----->");
  return a + b;
}

// let x = fun1(10, 20);
// console.log("x:", x);

// fun2() // Cannot access 'fun2' before initialization
const fun2 = () => {
  console.log("------fun2----->");
  return "test";
};

// let y = fun2();
// console.log("y:", y);
