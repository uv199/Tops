/*

NOTE - GIVE MEANS GIVE NOT PRINT
- Give means You have to make function which return value what i 
ask for

1. import data from json
2. give all city name of state which one give by user
3. give all city name , which have more character than user given input
4. city list which has population more then user give
5. acending decending population wise
6. top 5 city population wise [only name of city]
7. give total populatin of state which give by user
8. give top 5 state name population wise 
  */
const ALL_DATA = require("./data.json");

// [
//   {
//     state: "delhi",
//     population: 200,
//   },
//   {
//     state: "gujrat",
//     population: 200,
//   },
// ];

let arr = [];
ALL_DATA.map((objEle) => {
  // console.log("objEle", objEle.state_name);
  // objEle.state_name = delhi
  let index = arr.findIndex((ele) => ele.state === objEle.state_name);
  if (index === -1) {
    // console.log("if --------called------>");
    arr.push({
      state: objEle.state_name,
      population: +objEle.population,
    });
    // console.log("arr", arr);
  } else {
    // console.log("else --------called---------------->");
    arr[index].population += +objEle.population;
  }
});
console.log("arr", arr);
