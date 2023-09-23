const DATA = require("../../../JS-assignment/data.json");
// const DATA = [
//   {
//     city: "Delhi",
//     state_name: "Delhi",
//     population: "100",
//   },
//   {
//     city: "Mumbai",
//     state_name: "Mahārāshtra",
//     population: "24973000",
//   },
//   {
//     city: "Kolkāta",
//     state_name: "West Bengal",
//     population: "18502000",
//   },
// ];

function topFiveStatePopulationWise(data, count) {
  let arr = [];
  data.map((ele) => {
    let index = arr.findIndex((e) => e.stateName === ele.state_name);
    if (index === -1) {
      arr.push({ stateName: ele?.state_name, population: +ele?.population });
    } else {
      arr[index].population += +ele.population;
    }
  });
  arr.sort((a, b) => b.population - a.population);
  return arr.slice(0, count);
}
let x = topFiveStatePopulationWise(DATA, 6);
console.log("x", x);
