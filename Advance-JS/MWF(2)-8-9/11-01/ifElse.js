let x = 100;

// if (x === 100) {
//   console.log(" x is 100");
// }
// if (x === 200) {
//   console.log(" x is 200");
// }
// if (x === 300) {
//   console.log(" x is 300");
// }
// if (x === 100) {
//   console.log(" x is 100");
// }

if (x === 100) {
  console.log(" x is 100");
} else if (x === 200) {
  console.log(" x is 200");
} else if (x === 300) {
  console.log(" x is 300");
} else if (x === 100) {
  console.log(" x is 100");
}

// TODO have to try in switch case 01-11-23

// --------------for in loop------------

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
};

let ARR = [];
console.log("ARR", ARR)
for (const key in userObj) {
  console.log("key", typeof key, userObj[key]);
  ARR.push(key);
}
console.log("ARR", ARR)

let keysArr = Object.keys(userObj);
console.log("keysArr", keysArr);
