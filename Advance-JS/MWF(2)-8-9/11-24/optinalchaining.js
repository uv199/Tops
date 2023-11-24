let user = {
  name: "uv",
  // age:23,
  // address:{
  // city:"surat"
  //   },
  //   print: () => {
  //     console.log("--------->");
  //   },
};

let age = user.age;
console.log("age", age);

let city = user?.address?.city;
// let city = user ? (user.addres ? user.address.city : undefined) : undefined;
console.log("city", city);

user?.print?.();

// ----------------------------------------
let arr = {}; //
// let arr = [];

arr?.map?.((e) => {
  console.log("e", e);
});
