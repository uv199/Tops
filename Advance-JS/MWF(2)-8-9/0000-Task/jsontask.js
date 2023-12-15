const data = require("../../../JS-assignment/data.json");

// 8. give top 5 state name population wise

let want = [];

data.map((e) => {
  let index = want.findIndex((ele) => ele?.state === e.state_name);
  if (index === -1) {
    want.push({ state: e.state_name, population: +e.population });
  } else {
    want[index].population += +e?.population;
  }
});

want.sort((a, b) => b.population - a.population);
// console.log("-----------  want----------->", want);
let finalData = want.slice(0, 6);
console.log("-----------  finalData----------->", finalData);

/*let want = [
  {
    state: "Delhi",
    population: 30,
  },
  {
    state: "Mahārāshtra",
    population: 80,
  },
  {
    state: "West Bengal",
    population: 43,
  },
];
*/

let obj = {};
let name = obj.name;
let city = obj?.address?.city
console.log("-----------  city----------->", city)
console.log("-----------  name----------->", name);
