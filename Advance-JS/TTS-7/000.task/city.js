const Data = require("../../../JS-assignment/data.json");

// ["surat","ahemdabad"]

function getCityByState(stateName) {
  let filterData = Data.filter((e) => {
    return e.state_name === stateName;
  });

  let city = filterData.map((e) => {
    return e.city;
  });
  return city;
}
let city = getCityByState("Tamil Nādu");
let cityD = getCityByState("Mahārāshtra");
// console.log("-----------  cityD----------->", cityD)
// console.log("-----------  city----------->", city);

let arr = [1, 2, 3, 22, 4, 23, 2, 33, 1, 1, 5];
console.log(
  "-----------  arr----------->"
  // arr.sort((a, b) => b - a)
);
console.log(arr.sort());

// a and b => element
