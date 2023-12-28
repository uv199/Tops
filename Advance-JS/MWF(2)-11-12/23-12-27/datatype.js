// `${}`

// myName => camle case - myNameUrvish
// my_name => snake case
// MyName => pascal case

let user = {
  name: "urvish",
  age: 23,
  hobby: ["traveling", "reading"],
  address: {
    city: "surat",
    pinCode: 395007,
  },
  wife: null,
  degree: undefined,
  isMale: true,
  printName: function (params) {
    console.log("my name is", this.name);
  },
};

// console.log("name ", user.name);
// console.log("pincode ", user.address);
// console.log("hooby ", user.hobby[0]);

// array

let arr = [
  12,
  {
    greeting: "hello world",
    hobby: {
      normalHobby: ["reading", "dancing"],
      hobby: ["traveling", "swiming", { name: "vinita" }],
    },
  },
  function name(params) {
    console.log("-----------  name----------->");
  },
];

console.log("---->", arr[0]);
console.log("---->", arr[1].greeting);
console.log("-----------  arr[2]----------->", typeof arr[2]);
arr[2]();

console.log("my hobby is ", arr[1].hobby.hobby[1]);

console.log("her name is ", arr[1].hobby.hobby[2].name);

// array of obj
let userData = [
  {
    name: "uv",
    age: 23,
  },
  {
    name: "sid",
    age: 22,
  },
];
