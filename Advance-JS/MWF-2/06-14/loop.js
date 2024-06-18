/*
1. for -> when we already know how much time loop exicute  
2. while -> when we have a contion to stop a loop
3. do-while -> we have to run a loop once even our condition not setisfy at first time
4. for-in -> it give a key of object
5. for of loop -> give an element of array and string
*/

/*
let user = {
  name: "urvish",
  age: 23,
  "first name": "",
  city: "surat",
  10:1000
};


for (let key in user) {
  console.log("-----------  key----------->", key);
}
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let element of arr) {
//   console.log("-----------element----------->", element);
// }

let name = "URVISH";

for (let ele of name) {
  console.log("-----------  ele----------->", ele);
}

console.log("-=-=-=->", name[0]);

// break
// continue

// for (let i = 0; i < 10; i++) {
//   console.log("before");
//   if (i === 5) {
//     continue;
//   }
//   console.log("after");
// }

// null vs undefined


let a = "'"
let a2 = '"'
let a3 = `'"${100}`
