/**
1. import data from json
2. state na name par thi city na name
3. me apela hoy aa charactor thi vadhare  charactor hoy te city na name
4. city list which has population more then i gave
5. acending decending population wise
  */

const data = require("./in.json");

function getCityByStateName(state) {
  let filterData = data.filter((e) => {
    //   console.log("e :", e.state_name);
    return e.state_name === state;
  });

  let arr1 = [];

  for (let i = 0; i < filterData.length; i++) {
    const element = filterData[i].city;
    arr1.push(element);
    // console.log(element);
  }
  return arr1;
}

let mno = getCityByStateName("Delhi");
console.log("mno :", mno);

// let filterData = data.filter((e)=>{
//     return e.city.length >= 10
// })
// console.log("🚀 ~ file: json-task.js:21 ~ filterData ~ filterData:", filterData.length)
// let newData = [];
// data.map((e) => {
//   console.log("e :", e.city.length);
//   return e.city.length > 6 ? newData.push(e.city) : null;
// });
// console.log("newData :", newData);

// -------------------------------------------------------------------

// let filterdata=data.filter ((p)=>{
// return p.population < 3000
// })
// console.log("🚀 ~ file: json-task.js:34 ~ filterdata ~ filterdata:", filterdata.length)

// Map
// let newArray = [];
// let newData = data.map((p) => {
//   return p.population < 10000
//     ? newArray.push({
//         cityName: p.city,
//         population: p.population,
//       })
//     : null;
// });
// console.log("🚀 ~ file: json-task.js:43 ~ newData ~ newData:", newArray);

// ------------------------------------------------
// acending decending population wise
// marks.sort(function (a, b) { return a - b });
// let aar=[1,2,3,4,10]

//  aar.sort()
// console.log("🚀 ~ file: json-task.js:57 ~ newData:", newData)

// console.log("🚀 ~ file: json-task.js:55 ~ aar:", aar)

// data.sort(function (a, b) {
//   return a.population - b.population;
// });
// console.log("🚀 ~ file: json-task.js:62 ~ data:", data);
