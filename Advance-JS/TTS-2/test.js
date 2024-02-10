function print(num1) {
  console.log("------done-----", num1);
  //   return "return data";
}

let rerturnMsg = print(10);
console.log("-----------  rerturnMsg----------->", rerturnMsg);
print();

const print2 = (no1, no2, no3) => {
  console.log("-----------  no1----------->", no1);
  console.log("-----------  no2----------->", no2);
  console.log("-----------  no3----------->", no3);
  console.log("----print2-----");
};

print2(10, 20);

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.toSpliced(1, 2);
console.log("-----------  newArr----------->", newArr);
