/*

let userObj = {
  12: 300000,
  "user name": "vishnubhai----->",
  str: "string",
  obj: {
    city: "surat",
    pinCode: "395007",
  },
  hobby: ["reading", "running", { x: 9999 }],
  nu: null,
  un: undefined,
  number: 12345,
  fun: function (params) {
    console.log("------obj fun ------->");
  },
  fun2: () => {
    console.log("------obj fat arrow fun ------->");
  },
};

console.log("----->", userObj.obj.pinCode);
console.log("----->", userObj.hobby[1]);
console.log("----->", userObj.hobby[2].x);
userObj.fun();

let colorObj = {
  1: "red",
  two: "green",
  three: "black",
};

let userInput = "two";

console.log("------------->", colorObj[userInput]);



// ----------------------------array------------------------------

let arr = [
  null,
  undefined,
  "string",
  9999,
  { name: "urvish", age: 23 },
  [1, 2, 3, 4],
  function printArr(params) {
    console.log("---arrr function--->");
  },
];

arr[6]();
console.log("---arrr--->",arr[4].age);


// ----------------------------array of objects------------------------------

let userData = [
  {
    name: "urvish",
    age: 23,
    hobby: ["reading", "testing", "playing"],
  },
  {
    name: "divyesh",
    age: 23,
    hobby: ["reading", "testing", "playing"],
  },
];

// -------------------operator----------------------

("==");
console.log("-------->", "2" == 2); //true
console.log("-------->", "2" === 2); // false

if (false) {
  console.log("---true----->");
} else {
  console.log("---false----->");
}

let x = "urvish"; // null-undefined-false-0
let y = null; // null-undefined-false-0

if(x){
  
}else{

}

// x || x === 0 ? console.log("---true----->") : console.log("---false----->");
x && x === "test"
? console.log("---true----->")
: console.log("---false----->");
//  f || t = t

*/

let userData = {
  name: "urvish",
  adrress: {
    city: "surat",
    state: "gujarat",
    pinCode: 395007,
  },
  hobby: ["reading", "playing"],
  marks: [
    {
      subject: "hindi",
      per: 50,
    },
    {
      subject: "english",
      per: 50,
    },
  ],
};
