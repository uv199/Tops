let obj1 = {
  a: 20,
  b: 30,
};

let obj2 = { ...obj1 };
obj1.a = 200;
// console.log("-----------  obj1----------->", obj1);
// console.log("-----------  obj2----------->", obj2);

let arr1 = [1, 2, 3];
// let arr2 = arr1;
let arr2 = [...arr1];
arr1[0] = 100;
console.log("-----------  arr1----------->", arr1);
console.log("-----------  arr2----------->", arr2);
