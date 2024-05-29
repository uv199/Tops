var m, y;

// console.log("x is", x);
let x = 200;

console.log("y is", y);
y = 200;

m = 20;

function printNormal(params) {
  let c = 900;
  console.log("c is", c);
  console.log("printNormal");
}
printNormal();

// fatArrow();
var fatArrow = () => {
  console.log("fatArrow");
};
