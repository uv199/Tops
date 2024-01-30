let obj = {
  name: "urvish",
  printName: function (params) {
    console.log("My name is ", this.name);
  },
  age: 23,
  printAge: () => {
    console.log("My age is ", this.age);
  },
};

obj.printName();
obj.printAge();

function_name();
function function_name(params) {
  console.log("-----normalFunction--->");
}

// fatArrwFucntion
// fatFuntion()
const fatFuntion = () => {
  console.log("-----fat Arrow function--->");
};

// function_name();
// fatFuntion();
let user = {
  fName: "Urvish",
  lName: "Patel",
  FullName: this.fName + this.lName,
  getKeys: function () {},
};

console.log("-----------  user.FullName----------->", user.FullName);

let allKey = user.getKeys();
