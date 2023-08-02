//  object

let a = "";

let obj = {
  str: "urvish",
  number: 20,
  arr: [],
  object: {},
  empty: null,
  und: undefined,
  bool: true,
  fun: function (params) {
    console.log("fun call");
  },
};

console.log("---obj", obj.und);
obj.fun();

// array

let arr = [1, "str", {}, [], null];
console.log("---arr", arr[1]);

// == vs ===

console.log("1" == 1);
console.log("1" === 1);

// (black && white) || yellow || pink ||(green && red)

10 % 3; // 10-3 7-3 4-3 1

let aaa = "string";
console.log(typeof aaa);

a = true;
if (a) {
  console.log("===1=>");
} else if (a) {
  console.log("<==2==");
} else if (a) {
  console.log("<=3===");
} else if (a) {
  console.log("<==4==");
}
