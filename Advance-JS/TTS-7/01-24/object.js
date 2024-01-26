let obj = {
  str: "string",
  num: 10,
  fun: (no) => {
    console.log("-----fun----->", no);
  },
  fun2: function (params) {
    console.log("-----fun-2----->");
  },
};
// console.log("-----------  obj.str----------->", obj.str);

// obj.fun(100 + 200);
// obj.fun2();

let user = {
  name: "strig",
  num: 123,
  nul: null,
  und: undefined,
  bool: true,
  obj: {
    a: 200,
    b: 800,
  },
  arr: [1, 2, 3, 4, 5, { hello: "WOrld" }],
};

// console.log("-----------  user.arr[5].hello;----------->", user.arr[5].hello);

let obj2 = {
  1: "red",
  2: "yellow",
  name: "urvish Patel",
};

let colorNo = 2;
// console.log("----->", obj2[colorNo]);
// console.log("----->", obj2[1]);

let keyName = "name";
// console.log("--=-=-=->",obj2[keyName])

let keyArr = Object.keys(obj2);
console.log("-----------  keyArr----------->", keyArr);

let valueArr = Object.values(obj2);
console.log("-----------  valueArr----------->", valueArr);

let obj3 = { name: "test" };

let keys = Object.keys(obj3); //=> ["name"]
console.log("-----------  keys----------->", keys.length);
if (keys.length > 0) {
  console.log("object bharelo 6e");
} else {
  console.log("object khali 6e");
}
