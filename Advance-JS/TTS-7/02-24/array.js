let arr = [1, 2, 3, 4, 5];

console.log("-----------  arr----------->", arr);
/*

// sort(func) – sorts the array in-place, then returns it.
let arr2 = [12, 2, 34, 3, 6, 67, 35, 7, 1];
console.log("-----------  arr2----------->", arr2);
arr2.sort();
console.log("-----------  arr2----------->", arr2);


// find/filter(func) – filter elements through the function, return first/all values that make it return true.

let match = arr.find((e, i) => {
    //   console.log("-----------  e----------->", e);
    return e > 2;
});
// console.log("-----------  match----------->", match);

let newArr = arr.filter((e, i) => {
    console.log("-----------  e----------->", e.toFixed(2));
    return e > 20;
});
console.log("-----------  newArr----------->", newArr);

// forEach(func) – calls func for every element, does not return anything.

arr.forEach((e) => {
    console.log("e-->", e);
});


// map(func) – creates a new array from results of calling func for every element.
let mapArr = arr.map((e) => {
    return e + 1;
    //   return { no: e + 1 };
});
console.log("-----------  mapArr----------->", mapArr);

// reverse() – reverses the array in-place, then returns it.
arr.reverse();
console.log("-----------  arr----------->", arr)


// join – convert a array to string.

let joinStr = arr.join("");
let toStingStr = arr.toString();
console.log("-----------  joinStr----------->", joinStr);
console.log("-----------  toStingStr----------->", toStingStr);

let name = "urvish patel"; // =>"letap hsivru"
// "patel urvish"

let sptArr = name.split("");
sptArr.reverse();
console.log("-----------  sptArr----------->", sptArr);
let revstr = sptArr.join("");
console.log("-----------  revstr----------->", revstr);


// reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// 1,2,3,4,5
let total = arr.reduce((LRV, e) => {
    console.log("-----------  LRV,e----------->", LRV, e);
    return LRV + e;
});
console.log("-----------  total----------->", total)

*/
// let arr2 = [1, 2, 3, 4, 5, 6];
// arr2.splice(2, 4); // []
// arr2.slice(0, 3);
// console.log(arr2); // [1,2]

/*

 let a = [
     { name: "urvish",age:23 },
     { name: "jatin",age:23 },
     { name: "latesh",age:23 },
     { Name: "riddhesh",age:23 },
     { name: "hemant",age:23 },
    ];
    
let name = [ "urvish", "jatin", "latesh", "riddhesh", "hemant" ]

let data = [
    ["urvish", 23],
    ["jatin", 23],
    ["latesh", 23],
    ["riddhesh", 23],
    ["hemant", 23],
];


*/
// CIA = chnage in array
// GNA = give new array
