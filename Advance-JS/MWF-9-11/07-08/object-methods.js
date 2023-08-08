let obj = {
  name: "urvish",
  age: 26,
  city: "surat",
};

// for (const key in obj) {
//   console.log(" key:", key);
//   obj[key];
//   console.log(" obj[key]:", obj[key]); // obj.name // obj.age // obj.city
// }

let keysArr = Object.keys(obj);
console.log(" keysArr:", keysArr);

let valueArr = Object.values(obj);
console.log(" valueArr:", valueArr);

let ent = Object.entries(obj);
console.log(" ent:", ent);
