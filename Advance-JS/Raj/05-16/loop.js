/*
for (let i = 10; i < 10; i++) {
  console.log("i: ", i);
}

// Do while loop is a exit control loop => it run event condition not match 1st time  
// For loop is a entry control loop => it not runs while condition not match 1st time 
 
let j = 10;
do {
  console.log("j: ", j);
  j++;
} while (j < 10);

let h = 0;
while (h < 10) {
  console.log("h: ", h);
  h++;
}



// to print array element
for (let ele of [10, 20, 30, 40, 50]) {
  console.log("ele: ", ele);
}
*/

/*
let obj = {
  100: 20,
  b: 30,
  c: 40,
  d: 50,
  e: 60,
};

for (let keyName in obj) {
  console.log("keyName: ", keyName);
  console.log("value: ", obj[keyName]);
}
*/

/*
console.log("null", typeof null);
console.log("undefined", typeof undefined);
console.log("[]", typeof []);
console.log("{}", typeof {});
console.log("string", typeof "string");
*/

let arr2 = [100, 200, 300, 400, 500];
// console.log("🚀 ~ arr2:", arr2.length);

/*
for (let i = 0; i < arr2.length; i++) {
  console.log("element", arr2[i]);
  if (arr2[i] === 200) break;
}
*/

for (let i = 0; i < arr2.length; i++) {
  console.log("------->");
  if (arr2[i] === 200 || arr2[i] === 300) continue;
  console.log("element", arr2[i]);
}


