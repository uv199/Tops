/*

for (let i = 0; i < 5; i++) {
  console.log("---->", i);
  if (i === 3) {
    break;
  }
//   i++ in the end
}

let i = 5;
do {
  console.log("---do-while-->", i);
} while (i < 5);
*/
let upper = "";
let lower = "";
for (let i = 0; i < 5; i++) {
  let str = "";
  let str2 = "";
  for (let j = 0; j <= i; j++) {
    // console.log("*");
    str += "*";
  }
  for (let j = 5; j > i; j--) {
    // console.log("*");
    str2 += "*";
  }
  upper += `${str} \n`;
  lower += `${str2} \n`;
}
console.log(upper);
console.log(lower);
