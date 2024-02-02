let user = {
  name: "uv",
  age: 23,
  add: {
    city: "surat",
    pin: 395007,
  },
};

// let pre = user ? (user.school ? user.school.pre : undefined) : undefined;
let pre = user?.school?.pre;

console.log("-----------  pre----------->", pre);

// console.log("--->city", user.add.city);
// console.log("----->", user?.school?.pre);

// user?.printName?.();

// let userArr = "data not fund";

// userArr?.map?.((e) => console.log("name", e));
