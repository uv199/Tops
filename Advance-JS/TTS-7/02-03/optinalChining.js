let user = {
  name: "uv",
  age: 23,
  //   address: {
  //     pin: 395007,
  //     city: "surat",
  //   },
  // hobby:["hello","test"]
};
// let city = user ? (user.address ? user.address.city : undefined) : undefined;
let city = user?.address?.city;
console.log("-----------  city----------->", city);

console.log("city : ", user?.address?.city);
console.log("hooby-2", user?.hobby?.[1]);
console.log("first", user?.["name"]);
user?.printName?.();

let data = "data not found";
data?.map?.((e) => console.log("e===>", e));
