const data = require("../../../JS-assignment/data.json");
// console.log("data:--->", data[0]);

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
/*
// test------->

let obj = {
    test: [{ x: 1 }, { x: 2 }, { x: 3 }],
};

obj.test.map((e) => {
    let keys = Object.keys(e)
    console.log("------", keys.length);
});

*/
