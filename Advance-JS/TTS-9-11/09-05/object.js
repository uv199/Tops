/*

let obj = {
    name: "urvish",
    12: 100,
    test_test: "test_test",
    "name first": "patel",
};


console.log("->1",obj.name)
let m = 12
console.log("->2",obj[12])
console.log("->2",obj[m])
console.log("->3",obj.test_test)
console.log("->4",obj["name first"])

*/

let obj = {
  x: "string",
  bool: true,
  no: 12,
  arr: [1, 2, 3],
  ob: {
    a: 10,
  },
  un: undefined,
  n: null,
  fun: function () {
    console.log("fun of object",this.x);
  },
};


obj.fun()
