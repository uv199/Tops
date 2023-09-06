/* 

let obj = {
    x: 20,
    y: 200,
    z: 600,
};

// let x = obj.x;
// let y = obj.y;
// let z = obj.z;

let { x, z, xy, y } = obj;
let arr = [1, 2, 3, 4];

let [a, b, c] = arr; // 1,2,3
// let [a, c, b] = arr; // 1,3,2
console.log("a, b, c:", a, b, c);


// -------rest---------------
let arr = [1, 2, 3, 4, 5, 6, 7];

// let [a,  ...c,b] = arr; // Rest element must be last element
let [a, b, ...c] = arr;
console.log("a, b, ...c:", a, b, c);

let obj = {
    x: 20,
  y: 200,
  z: 600,
};

let { x, ...test } = obj;
console.log("🚀 ~ file: destructuring-rest.js:36 ~ x, y:", x, test);

function fun(a, b, ...c) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}

fun(1, 2, 3, 4, 5, 6);

*/
function returnObj(params) {
  return { name: "test---", age: 12 };
}
let { name,age } = returnObj();
console.log("age:", age)
console.log("name", name);
