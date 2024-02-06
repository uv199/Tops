// filter city by substring - like search

let arr = [
  { population: "1234", city: "Mumbai", state_name: "Mahārāshtra" },
  { population: "123", city: "Kolkata", state_name: "West Bengal" },
  { population: "12", city: "Bangalore", state_name: "Karnātaka" },
  { population: "1234", city: "Pune", state_name: "Mahārāshtra" },
  { population: "1", city: "Ahmedabad", state_name: "Gujarāt" },
  { population: "234", city: "sūrat", state_name: "Gujarāt" },
  { population: "1", city: "Prayagraj", state_name: "Uttar Pradesh" },
  { population: "34", city: "Lucknow", state_name: "Uttar Pradesh" },
  { population: "3999", city: "Cwnpore", state_name: "Uttar Pradesh" },
];

let data = arr.filter((e) => e.city.includes("at"));
let arr2 = data.map((e) => e.city);
console.log("-----------  arr2----------->", arr2);
