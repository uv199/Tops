// ... rest/spred
/*
// rest
let arr = [1, 2, 3, 4, 5];

let [a, b, ...c] = arr;
console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);

let obj = { x: 20, y: 30, z: 90 };
let { x, ...y } = obj;
console.log("-----------  x----------->", x)
console.log("-----------  y----------->", y)


let arr = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];

let arr3 = [...arr,...arr2]
console.log("-----------  arr3----------->", arr3)

// ...arr => 1, 2, 3, 4

console.log("----->",...arr)


let obj = { x: 20, y: 30, z: 90 };
let obj3 = { ...obj, uv: 7000 };
console.log("-----------  obj3----------->", obj3);

*/
let arr = [10, 20, 30];

function print(a, b, c) {
  console.log("-----------  a----------->", a);
  console.log("-----------  b----------->", b);
  console.log("-----------  c----------->", c);
}

// print(arr[0], arr[1], arr[2]); // print (10,20,30)
print(...arr); // print(10,20,30)
