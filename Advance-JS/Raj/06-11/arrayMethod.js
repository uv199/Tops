let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/*


// findIndex is like find, but returns the index instead of a value.
//  return index
let arrayOfObject = [{ a: 20 }, { a: 30 }, { a: 40 }, { a: 50 }];

// E = ELEMET OF ARRAY
// I = INDEX OF THAT ELEMENT

// let index = arr.findIndex((e, i) => {
//   console.log(i, "------>", e);
//   return e > 55;
// });
let index = arrayOfObject.findIndex((e, i) => {
  console.log(i, "------>", e);
  return e.a === 30;
});

// NOTE :  if you have an array of abject and you want to find the index of any perticular value you should use findindex instead of indexof.
// indexOf find a index by value
// findIndex find the index by condition
console.log("🚀 ~ index ~ index:", index);


// some - find a value is available or not in array and give a boolean response
 return boolean value
let available = arr.some((e, i) => {
  return e > 55;
});
console.log("🚀 ~ available ~ available:", available);



// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// if given conditio not satisfied by any elemnt then it return undefined
//  return value
let filterdData = arr.find((e, i) => {
  console.log("🚀 ~ filterdData ~ e:", e);
  return i === 3;
});
console.log("🚀 ~ filterdData ~ filterdData:", filterdData);


// filter return an array
// return array
// if matching condition not matched by any element filter return blank array [] 
const filterD = arr.filter((e, i) => {
  console.log("🚀 ~ filterD ~ i:", i);
  return i % 2 === 0;
});
console.log("🚀 ~ filterD ~ filterD:", filterD);

// forEach(func) – calls func for every element, does not return anything.

arr.forEach((e) => {
  console.log("🚀 ~ e:", e);
});

// map(func) – creates a new array from results of calling func for every element.
// return nre array

// let newArr = arr.map((e) => {
//   return e * 10;
// });

// num-1 num-2
// num- + index + 1 => num-0+1 => num-1
// num- + index + 1 => num-1+1 => num-2

let newArr = arr.map((e, i) => {
  return { [`num-${i + 1}`]: e };
});
console.log("🚀 ~ newArr ~ newArr:", newArr);
// let arrayOfObject = [{ a: 20 }, { a: 30 }, { a: 40 }, { a: 50 }];
// TODO i just want to collect all value of 'a' which is stored in object of array
// TODO do sum of all array element using map


*/
// split/join – convert a string to array and back.

// let str = arr.join("--");
let str = arr.join(" ");
let str2 = arr.toString();
console.log("🚀 ~ str2:", str2);
console.log("🚀 ~ str:", str);

let name = "Urvish"; // => hsivrU

let step1 = name.split("");
console.log("🚀 ~ step1:", step1);
let step2 = step1.reverse();
console.log("🚀 ~ step2:", step2);
let lastStep = step2.join("");
console.log("🚀 ~ lastStep:", lastStep)

// TODO : " Urvish V. Patel" => "Patel V. Urvish"
// TODO : " Urvish V. Patel" => "hsivrU .V letaP"

