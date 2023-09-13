const data = require("../../../JS-assignment/data.json");
// console.log("data:--->", data[0]);
/*

function getCityByChrlength(length) {
  let filterdData = data.filter((e) => {
    return e.city.length > length;
  });
  let cityData = filterdData.map((e) => e.city);
  return cityData;
}
let x = getCityByChrlength(15);
console.log("x:", x);

function getCityByPopulation(population) {
  let filterdData = data.filter((e) => {
    return e.population > population;
  });
  let cityData = filterdData.map((e) => e.city);
  return cityData;
}
let y = getCityByPopulation(15000000);
console.log("y:", y);

function getAccendingPopulation() {
  data.sort((a, b) => b.population - a.population);
  let topFive = data.slice(0, 5);
  return topFive;
}
let z = getAccendingPopulation();
console.log("z:", z);
// test------->

let obj = {
    test: [{ x: 1 }, { x: 2 }, { x: 3 }],
};

obj.test.map((e) => {
    let keys = Object.keys(e)
    console.log("------", keys.length);
});


function statePopulation(state) {
  let filterdData = data.filter((e) => {
    return e.state_name === state;
  });
  let totalPopulation = 0;
  filterdData.forEach((e) => {
    totalPopulation += parseInt(e.population);
  });
  console.log("totalPopulation", totalPopulation);
}
statePopulation("Karnātaka");

*/

function topState() {
  // count total popolation of state
  let totalPopulation = {};
  data.forEach((e) => {
    totalPopulation[e.state_name] =
      totalPopulation[e.state_name] || 0 + parseInt(e.population);
  });
  // do sorting
  let arr = [];
  for (const key in totalPopulation) {
    arr.push({ stateName: key, population: totalPopulation[key] });
  }
  arr.sort((a, b) => b.population - a.population);

  // take top five
  return arr.slice(0, 5);
}
let fiveState = topState("Karnātaka");
console.log("fiveState", fiveState);

// let obj = {
//   name: "urvish",
//   age: 50,
// };

// let x = "name";
// obj[x];
