function print(x, y) {
  console.log("---->", x);
  if (x < y) {
    print(x + 1, y);
  }
}

print(5, 10);

let arr = [1, 2, 3, 4, 54, 56];
let length = arr.length;
print(arr, length);
