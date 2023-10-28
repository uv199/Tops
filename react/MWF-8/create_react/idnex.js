/*
let arr = str.split("").sort();
let str = "aa1234a945///110";
console.log("arr", arr);
let ss = arr[1];
let sl;
for (let i = 0; i < arr.length; i++) {
  console.log("+arr[i]", +arr[i]);
  if (!Number.isInteger(+arr[i]) && arr[i] !== "0") {
    console.log("i", i);
    sl = arr[i - 2];
    break;
  }
}
console.log("ss", +"0");
console.log("sl", sl);
*/
//
/*
function print() {
  let user = {
    name: "urvish",
    age: 59,
  };

  console.log(
    `YOU HAVE TO COMPLETE MORE ${100 - user.age} TO COMPLETE 100 YEARS`
  );
}
print();

function countVovels(str) {
  let vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
countVovels("aeipppommuuuuuumu");

function removeOdd(arr) {
  return arr.filter((e) => e % 2 === 0);
}
let x = removeOdd([1, 2, 3, 5, 6, 8, 9, 0]);
console.log("x", x);

*/
let numberOnly = "aa1234a94++++**5110".replace(/\D/g, "");
console.log("numberOnly================", numberOnly);
