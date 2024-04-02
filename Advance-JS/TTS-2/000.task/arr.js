function oddEven(arr, type) {
  if (type === "odd") {
    let odd = arr.filter((e) => e % 2 === 1);
    return odd;
  } else {
    let even = arr.filter((e) => e % 2 === 0);
    return even;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let odd = oddEven(arr, "odd");
// console.log("-----------  odd----------->", odd);
let even = oddEven(arr, "even");
// console.log("-----------  even----------->", even);

let name = ["urvish patel", "vinni", "disha"];

let available = name.some((e) => {
  return e.length > 6;
});
console.log("-----------  available----------->", available);
