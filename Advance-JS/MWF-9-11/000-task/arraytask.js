const data = require("../../../JS-assignment/data.json");
const productData = require("../../../JS-assignment/product.json");
/*

function getCityByChrlength(length) {
  let filterdData = data.filter((e) => {
    return e.city.length > length;
  });
  let cityData = filterdData.map((e) => e.city);
  return cityData;
}
let x = getCityByChrlength(15);
function getCityByPopulation(population) {
  let filterdData = data.filter((e) => {
    return e.population > population;
  });
  let cityData = filterdData.map((e) => e.city);
  return cityData;
}
let y = getCityByPopulation(15000000);
function getAccendingPopulation() {
  data.sort((a, b) => b.population - a.population);
  let topFive = data.slice(0, 5);
  return topFive;
}
let z = getAccendingPopulation();
// test------->

let obj = {
    test: [{ x: 1 }, { x: 2 }, { x: 3 }],
};

obj.test.map((e) => {
    let keys = Object.keys(e)
});


function statePopulation(state) {
  let filterdData = data.filter((e) => {
    return e.state_name === state;
  });
  let totalPopulation = 0;
  filterdData.forEach((e) => {
    totalPopulation += parseInt(e.population);
  });
}
statePopulation("Karnātaka");



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
// let obj = {
//   name: "urvish",
//   age: 50,
// };

// let x = "name";
// obj[x];

// have to find who have highest percentage if there are more product with hightest percentage then we will take that product which have higer price
*/
function getHightestproduct() {
  let gettop = productData.sort((a, b) => {
    if (a.discountPercentage === b.discountPercentage) {
      return b.price - a.price;
    }
    return b.discountPercentage - a.discountPercentage;
  });

  let finalData = {
    ProductName: gettop[0].title,
    Price: gettop[0].price,
    DiscountPercentage: gettop[0].discountPercentage,
  };
  console.log("finalfiler", finalData);
}
getHightestproduct();
