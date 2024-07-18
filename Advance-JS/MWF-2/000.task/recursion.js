let arr = [11, 22, 33, 44, 55, 66, 77];
console.log("-----------  arr----------->", arr);

function print(arr, length) {
    if (length >= 1) {
      console.log(arr[length - 1]);
    return print(arr, length - 1);
  }
}

print(arr, arr.length);


