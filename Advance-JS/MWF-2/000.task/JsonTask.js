const CITY_DATA = require("./data.json");
console.log("-----------  CITY_DATA----------->", CITY_DATA.length);

function getCityByPopulation(no) {
  let filterData = CITY_DATA.filter((e) => {
    return e.population > no;
  });

  const cityNameArr = filterData.map((e) => {
    return e.city;
  });
  return cityNameArr;
}
let three = getCityByPopulation(300000);
console.log("-----------  three----------->", three);
let twenty = getCityByPopulation(2000000);
console.log("-----------  twenty----------->", twenty);
