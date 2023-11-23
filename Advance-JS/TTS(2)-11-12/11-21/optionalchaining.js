let user = {
  name: "urvish",
  //   age:20
  //   add: {
  //     city: "surat",
  //   },
  // fun :()=>{}
};

let age = user.age;
console.log("age", age);

let city = user?.add?.city; // user ? user.add ? user.add.city : undefibned :undefined
console.log("city", city);

user?.fun?.();

// let arr = [1, 2, 3];
let arr = null
arr?.map?.((e) => console.log(e));
