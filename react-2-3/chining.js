let obj = {
  a: 10,
  b: 20,
  //   c: {},
};

// console.log("obj :",  obj ? obj.c ? obj.c.d:null :null); // obj ? obj.c ? obj.c.d:null :null
console.log("obj :", obj?.c?.d); // obj ? obj.c ? obj.c.d:null :null
// console.log("obj :", obj?.c?.());

let num = 12.34;
console.log(num.toFixed());

let arr = [9, 1, 22, 23, 4];
arr?.sort();
console.log("arr --->:", arr);
console.log("arr --->:", arr.join("-"));
console.log("arr --->:", arr.toString());

// let newArr = arr.map((e, i) => {
//   return e + 1;
// });
// console.log("newArr :", newArr);
// let total = arr.reduce((returnVal, e, i) => {
//   console.log("returnVal, e :", returnVal, e);
//   return returnVal + e;
// }, 0);

// console.log("total :", total);
