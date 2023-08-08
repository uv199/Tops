let obj = {
  name: "test",
  age: 12,
  city: "surat",
};

// let obj1 = obj;
let obj1 = {};

// obj.age = 50;

console.log(" obj1:", obj1);
for (const key in obj) {
  obj1[key] = obj[key];
}
obj.age = 50;
console.log(" obj1:", obj1);

// let a = 30;
// let b = a;
