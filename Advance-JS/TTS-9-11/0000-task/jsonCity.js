const DATA = require("../../../JS-assignment/data.json");
// console.log("DATA", DATA);

function getCityByStateName(state) {
  let filteredData = DATA.filter((e) => {
    // console.log("--->", e.state_name);
    return e?.state_name === state;
  });
  // console.log("filteredData", filteredData);
  let cityArr = filteredData.map((e) => {
    // console.log("e", e);
    return e.city;
  });
  return cityArr;
}
let cityList = getCityByStateName("Delhi");
let cityList2 = getCityByStateName("Mahārāshtra");
console.log("cityList2", cityList2);
console.log("cityList", cityList);
