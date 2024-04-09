// function print(params) {
//   let x = 5;
//   for (let i = 0; i < x; i++) {
//     let str = " ";
//     for (let j = 0; j <= x - 1; j++) {
//       str += "*";
//     }
//   }
// }

// print();

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [];
// let arr4 = [];

// arr3 = arr1;

// arr1.push(9);

// console.log(arr3);

// arr4 = [...arr2];

// arr2.push(100);

// console.log("-----------  arr4----------->", arr4);

function star() {
  let n = 5;
  for (let i = 0; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

star();
