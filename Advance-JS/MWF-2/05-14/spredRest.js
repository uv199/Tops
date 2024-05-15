/*

let user = {
  name: "urvish",
  age: 23,
  city: "surat",
};
console.log("-----------  user----------->", user);

// ...user

let user2 = {
  ...user,
  Name: "jatin",
};

console.log("-----------  user2----------->", user2);

let arr = [1, 2, 3, 4, 5];

let max = Math.max(...arr);
console.log("-----------  max----------->", max);

*/

function print(a, b, c) {
  console.log("-----------  a,b,c----------->", a, b, c);
}
let name = ["uv", "jatin", "rohit"];

print(...name); // print("uv", "jatin", "rohit")
