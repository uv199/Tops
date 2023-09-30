let user = {
  name: "uv",
  age: 23,
};
// let x = user.address.city;
let x = user ? (user.address ? user.address.city : undefined) : undefined;

let y = user?.address?.city?.pincode;
console.log("y", y);

console.log("x", x);

user?.print?.();
// user?.address = { city: "surat" }; // give error - we can't use (?) at left end side

let data = "null";

data?.map?.((e) => {
  console.log("---->", e);
});
