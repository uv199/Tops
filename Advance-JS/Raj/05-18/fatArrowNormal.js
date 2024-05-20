function printNormal(params) {
  let c = 900;
  console.log("c is", c);
  console.log("printNormal");
}
// printNormal();

// fatArrow();
var fatArrow = () => {
  console.log("fatArrow");
};

let obj = {
  name: "urvish",
  age: 23,
  print: function () {
    console.log("My name is ", this.name);
  },
  print2: () => {
    console.log("My age is ", this.age);
  },
};

obj.print();
obj.print2();
