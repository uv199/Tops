let obj1 = {
  a: 20,
  b: 30,
  c: {
    c1: 90,
    c2: 300,
  },
};

let obj2 = { ...obj1 };
// let jsonData = JSON.stringify(obj1)
// let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj2 = JSON.parse(JSON.stringify(obj1)) ;

obj1.a = 900;
obj1.c.c1 = 90000000;
console.log("🚀 ~ obj1:", obj1);
console.log("🚀 ~ obj2:", obj2);
