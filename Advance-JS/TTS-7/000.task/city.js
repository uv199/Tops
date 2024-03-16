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
// let city = getCityByState("Tamil Nādu");
// let cityD = getCityByState("Mahārāshtra");

function totalPopulationOfState(stateName) {
  let filterData = Data.filter((e) => {
    return e.state_name === stateName;
  });
  let totalPop = 0;
  filterData.map((e) => {
    totalPop += +e.population;
  });
  console.log("-----------  totalPop----------->", totalPop);
}
// totalPopulationOfState("Mahārāshtra");

//  give top 5 state name population wise

function top5State(params) {
  let obj = {};
  Data.map((e) => {
    obj[e.state_name] = (obj[e.state_name] || 0) + +e.population;
  });

  let arr = Object.entries(obj);
  arr.sort((a, b) => b[1] - a[1]);
  // console.log("-----------  arr----------->", arr);
  let top5 = arr.slice(0, 5);
  console.log("-----------  top5----------->", top5);
}
// top5State();

let data = [
  { rating: 15, totalRaters: 3 },
  { rating: 20, totalRaters: 5 },
  { rating: 20, totalRaters: 10 },
  { rating: 18, totalRaters: 6 },
];

let newData = data.map((e) => {
  e.avj = e.rating / e.totalRaters;
  console.log("----e---", e);
  return e;
});

newData.sort((a, b) => a.avj - b.avj);
console.log("-----------  newData----------->", newData);

// 1.23597 = 3 => 1.236

// 1 = 5 => 1.00000

let school = [
  {
    name: "student-1",
    markSheet: [
      { subject: "hindi", marks: 58 },
      { subject: "english", marks: 85 },
      { subject: "maths", marks: 82 },
    ],
  },
  {
    name: "student-2",
    markSheet: [
      { subject: "hindi", marks: 77 },
      { subject: "english", marks: 91 },
      { subject: "maths", marks: 38 },
    ],
  },
  {
    name: "student-3",
    markSheet: [
      { subject: "hindi", marks: 77 },
      { subject: "english", marks: 65 },
      { subject: "maths", marks: 66 },
    ],
  },
];
