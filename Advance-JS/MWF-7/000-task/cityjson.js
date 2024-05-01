const data = require("../../../JS-assignment/data.json");
// console.log("-----------  data----------->", data)

/*
function getCityByStateName(stateName) {
  let filterData = data.filter((e) => {
    // return e.state_name === stateName;
    // return e.population >= stateName;
    // return e.city.length >= 6;
  });
  let responseData = filterData.map((e) => {
    return e.city;
  });
  return responseData;
}

let data1 = getCityByStateName("Delhi");
// console.log("-----------  data1----------->", data1);
let data2 = getCityByStateName("West Bengal");
// console.log("-----------  data2----------->", data2);

// [1,2,3,4]
// data.sort((a, b) => a.population - b.population);
// data.slice(0,6)

// get popuation by state name
function getPopulationByStateName(stateName) {
  let filterData = data.filter((e) => {
    return e.state_name === stateName;
  });
  console.log("-----------  filterData----------->", filterData);
  let total = 0;
  filterData.map((e) => {
    total += e?.population;
  });
  console.log("-----------  total----------->", total);
  // return responseData;
}
// getPopulationByStateName("Delhi");
*/
// last task top 5 state by popu

/*
function getTopStateByPopulation() {
  let arr = [];

  data.map((e) => {
    let available = arr.some((ele) => ele.stateName === e.state_name);
    if (!available) {
      arr.push({ stateName: e.state_name, population: 0 });
    }
  });
  console.log("-----------  arr----------->", arr);
  data.map((e) => {
    let index = arr.findIndex((ele) => ele.stateName === e.state_name);
    // console.log(
    //   "-----------  index----------->",
    //   index,
    //   e.state_name,
    //   arr[index]
    // );
    arr[index].population += e.population;
  });
  arr.sort((a, b) => b.population - a.population);
  let top5 = arr.slice(0, 6);
  return top5;
}

// getTopStateByPopulation();
*/
// [{stateName:"Delhi"},{stateName:"Maharashtra"}]

// --------------------------------------

function getStatePopulation(stateName) {
  let filterData = data.filter((e) => {
    return e.state_name === stateName;
  });
  let total = 0;
  filterData.map((e) => {
    total = total + e.population;
  });
  return total;
}

function getTopStateByPopulation() {
  let arr = [];

  data.map((e) => {
    let available = arr.some((ele) => ele.stateName === e.state_name);
    if (!available) {
      arr.push({ stateName: e.state_name, population: 0 });
    }
  });
  arr.map((e, i) => {
    let population = getStatePopulation(e.stateName);
    arr[i].population = population;
  });
}
getTopStateByPopulation();
