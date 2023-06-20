let x = "value1";
console.log("x :", x);

function fun1() {
  // let v;
  {
    var v;
    v = "test";
  }
  return v;
}

console.log("fun1() :", fun1());

let a = [1, 2, 3];

let sorted = a.toSorted();
console.log("sorted  :", sorted);
