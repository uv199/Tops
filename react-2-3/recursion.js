let x = 0;

// function print() {
//   console.log("====>", x);
//   x++;

//   if (x < 10) {
//     print();
//   } else {
//     console.log("finish");
//   }
// }

// print();

function print(a) {
  console.log("a :", a);
  if (a < 10) {
    a++;
    print(a);
  } else {
    console.log("finish");
  }
}

print(1);
