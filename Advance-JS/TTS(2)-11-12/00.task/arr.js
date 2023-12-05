let arr = [
  {
    city: "Delhi",
    state_name: "Delhi",
    population: "32226000",
  },
  {
    city: "Mumbai",
    state_name: "Mahārāshtra",
    population: "24973000",
  },
  {
    city: "Kolkāta",
    state_name: "West Bengal",
    population: "18502000",
  },
  {
    city: "Bangalore",
    state_name: "Karnātaka",
    population: "15386000",
  },
  {
    city: "Chennai",
    state_name: "Tamil Nādu",
    population: "12395000",
  },
];

// print all city by use of map
// arr.map((e) => {
//   console.log(e);
// });

// [1,2,3] => [11,12,13]

let name = ["uv", "jayom", "dwanil", "nidhi"];
// let nameWithSurname = ["uv Patel", "jayom Patel", "dwanil Patel", "nidhi Patel"];
let data = name.map((e) => {
  // return e + " patel";
  // let firstch = e[0];
  return e[0].toUpperCase() + e.slice(1, e.length);
});
console.log("data", data);


