/*

//-----------------hoisting-----------

// console.log("x", x); //  generate err = Cannot access 'x' before initialization
// console.log("z", z); //  generate err = Cannot access 'x' before initialization
console.log("y", y); // support hoisting

let x = 100;
const z = 100;
var y = 100;

// fatFun(); //  generate err =  Cannot access 'fatFun' before initialization
normalFun();

function normalFun(params) {
  console.log("---normalFuns--->");
}

var fatFun = () => {
  console.log("---fatFun--->");
};


*/

// -----------------------THIS----------------------------

let obj = {
  name: "urvish v patel",
  age: 23,
  printName: () => {
    console.log(
      `fat arrow ----> my name is ${this.name} and i'm ${this.age} old`
    );
  },
  printNameNormal: function (params) {
    console.log(`normal ----> my name is ${this.name}  and i'm ${this.age} old`);
  },
};

obj.printNameNormal();
obj.printName();
