let arr = [1, 2, 3, 4, 5];
/*
// concat(array/element) --> joint two array and return new array

let arr2 = [6, 7];
let arr3 = [8, 9];

// let concatArr = arr.concat(arr2);
let concatArr = arr.concat(arr2, 0, arr3, 10, 12);
console.log("-----------  concatArr----------->", concatArr);


// splice(start index,count to remove,new element value...) -->  you can add and remove element by using splice
// arr.splice(1,2,20,30); // add and remove -> like update
// arr.splice(1,2); // only remove -> like delete
arr.splice(1,0,1.5); // only add -> like add
console.log("-----------  arr----------->", arr)


//  slice(startIndex,endIndex) --> return a piece of array according given index 
// let sliceArr = arr.slice(1,3)
// let sliceArr = arr.slice(1,-1)
let sliceArr = arr.slice(2,-4)
console.log("-----------  sliceArr----------->", sliceArr)


// indexOf => find a index of element by passing value

let arr2 = [{ a: 20 }, { b: 30 }, { c: 50 }];
// let index = arr.indexOf(2)
// let index = arr.indexOf(20);
let index = arr.indexOf({ a: 20 });

console.log("-----------  index----------->", index);

// findIndex => find index by give condition
let arr2 = [{ a: 20 }, { a: 30 }, { a: 50 }];

let index = arr2.findIndex((e) => {
    console.log("-----------  e----------->", e);
    return e.a === 30;
});
console.log("-----------  index----------->", index);


// includes --> find a matching element and give ans in true/false

// let ans = arr.includes(5)
let ans = arr.includes(500)
console.log("-----------  ans----------->", ans)

let arr2 = [{ a: 20 }, { a: 30 }, { a: 50 }];
let ans = arr2.some((e) => {
    return e.a === 300;
});
console.log("-----------  ans----------->", ans);

//  sort -> sorting a array

let arr2 = [1, 2, 3, 22, 33, 4, 25, 1.2, 0, 0.4, -1];
arr2.sort();
console.log("-----------  arr2----------->", arr2);

// reverse - reverse an array

arr.reverse();
console.log("-----------  arr----------->", arr)


// join(stb string) --> join a element of array with given string
let arr2 = [1, 2, 3, 22, 33];

let str = arr2.join("");
console.log("-----------  str----------->", str);
let str2 = arr2.toString();
console.log("-----------  str2----------->", str2);

let arr3 = [{ a: 20 }, { a: 30 }, { a: 50 }];

console.log("---->", arr3.join(""));

*/
