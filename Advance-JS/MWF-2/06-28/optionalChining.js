let user = {
  name: "urvish",
  //   age:23,
  // address: {
  //   pincode: 395007,
  // },
  //   print: () => {
  //     console.log(":------->");
  //   },
};

// user.print()
user?.print?.();
/*
console.log("---name----", user?.name);
console.log("---age----", user?.age);
console.log("---pincode----", user?.address?.pincode);

let data = user ? (user.address ? user.address.pincode : undefined) : undefined;
console.log("-----------  data----------->", data);

// user?.name = "test" // give error

*/
// let arr = [1, 2, 3, 4];
let arr = null;

// console.log("-----------  arr.length----------->", arr?.length);

arr?.forEach?.((e) => {
  console.log("----->", e);
});

// user["name"]
