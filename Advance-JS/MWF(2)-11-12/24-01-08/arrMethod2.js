let arr = [
  { population: "1234", city: "Mumbai", state_name: "Mahārāshtra" },
  { population: "123", city: "Kolkāta", state_name: "West Bengal" },
  { population: "12", city: "Bangalore", state_name: "Karnātaka" },
  { population: "1234", city: "Pune", state_name: "Mahārāshtra" },
  { population: "1", city: "Ahmedabad", state_name: "Gujarāt" },
  { population: "234", city: "sūrat", state_name: "Gujarāt" },
  { population: "1", city: "Prayagraj", state_name: "Uttar Pradesh" },
  { population: "34", city: "Lucknow", state_name: "Uttar Pradesh" },
  { population: "3999", city: "Cawnpore", state_name: "Uttar Pradesh" },
];



let person = [
  { name: "uv", age: 23 },
  { name: "nayan", age: 25 },
  { name: "dharmin", age: 20 },
  { name: "sid", age: 22 },
  { name: "rajni", age: 29 },
];

/*

// let str = "Hello World"; // => "dlroW olleH"
let str = "Hello World"; // => "dlroW olleH"
let reversStr = str.split("").reverse().join("");
console.log("-----------  reversStr----------->", reversStr);


person.sort((a, b) => a.age - b.age);
console.log("-----------  person----------->", person);

let match = person?.find?.((e) => e.age > 20);
console.log("-----------  match----------->", match);

let matchAll = person?.filter?.((e) => e.age > 20);
console.log("-----------  matchAll----------->", matchAll);

// arr.indexOf(); => index = only find by value
// arr.findIndex(); => index = find by condition

let i = person.indexOf(20);
console.log("-----------  i----------->", i);

let index = person.findIndex((e) => e.age === 290);
console.log("-----------  index----------->", index);

let a = [1, 2, 34, 5, 77, 8];
let i1 = a.indexOf(77); // only find by value
let i2 = a.findIndex((e) => e > 6); // find by condition


// arr.include => T/F =  only find by value
// arr.some() => T/F = find by condition
let a = [1, 2, 34, 5, 77, 8];
let available1 = a.includes(77);
let available2 = a.some((e) => e > 700);
console.log("-s----------  available1----------->", available1);
console.log("-----------  available2----------->", available2);

*/

arr.sort((a, b) => {
  if (a.city.toLowerCase() > b.city.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});
console.log("-----------  arr----------->", arr);

// console.log("-----------  ----------->", "a" - "b");

// arr.sort((a, b) => a.population - b.population);
// console.log("-----------  arr----------->", arr);
console.log("----", "a" > "A");




function findByLength(x) {
  
  let data = arr.filter((e)=> e.city.length>x)
  return data 
}

let moreThen6=findByLength(6)
let moreThen7=findByLength(7)
