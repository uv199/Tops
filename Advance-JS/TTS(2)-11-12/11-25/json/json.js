let obj = {
  name: "Urvish",
  age: 23,
  hobby: ["reading", "play foorBall"],
  add: {
    city: "surat",
    pinCode: 395007,
  },
};

let jasonString = JSON.stringify(obj);
console.log("jasonString",typeof  jasonString,jasonString);

let normalData = JSON.parse(jasonString);
console.log("normalData", normalData);
