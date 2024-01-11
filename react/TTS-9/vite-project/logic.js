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

let pending = ["a", "b", "c", "d", "e", "f"];

let done = [];

let selected = [0, 1, 4];

let p = [];
let d = [];
pending.map((e, i) => {
  let avilable = selected?.includes(i);
  if (avilable) {
    d.push(e);
  } else {
    p.push(e);
  }
});

console.log("-----------  p----------->", p);
console.log("-----------  d----------->", d);

pending = p;
done = d;
console.log("-----------  pending----------->", pending);
console.log("-----------  done----------->", done);
