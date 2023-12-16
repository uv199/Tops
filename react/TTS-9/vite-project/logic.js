// let obj = [
//   {
//     a: 20,
//     child: [{ a: 20, child: [{ a: 20 }] }],
//   },
// ];

// obj.map((e) => {
//   Object.getOwnPropertyNames(child);
// });

// -----------------------------------

let x = {
  count: 0,
};

console.log("------>", x.count);

// x = x.count + 1;
x = {
  count: x.count + 1,
};
console.log("------>", x.count);
