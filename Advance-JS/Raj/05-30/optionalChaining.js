let obj = {
  // name: "urvish",
  // address: {
  //   // city: "surat",
  // },
};

// obj?.address?.city = "surat"

obj?.["name"];

let name = obj.name;
console.log("🚀 ~ name:", name);

// let city = obj.address.city

// let city = obj ? (obj.address ? obj.address.city : undefined) : undefined;
let city = obj?.address?.city;

console.log("🚀 ~ city:", city);

// let data = [1, 2, 3];
let data = null;
// let data = "test";

data?.map?.((e) => {
  console.log("e:", e);
});


