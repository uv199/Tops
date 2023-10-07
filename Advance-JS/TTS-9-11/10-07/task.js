/*
// stape-1
1. gethering requirment
2. what we have and what we have to delever
3. make plan for task and devide them
4. exicute your plan chnage according real time changes 
5. test it 
6. deliver

EXAMPLE

1. what to find all city which have more charectar then user gave
2. data of city and city's array which all city have more char.. then user gave
3. make plan 
    - get all city name one by one 
    - find length of all city 
    - compare that length with user input
    - get all city which match our criteria
    - only city name
*/

const DATA = require("../../../JS-assignment/data.json");
// console.log("DATA", DATA);

/*
//write rough logic
let data = DATA.filter((ele) => {
  //   console.log("ele====>", ele.city.length > 14);
  return ele.city.length > 14;
});

const cities = data.map((e) => {
  return e.city;
});
console.log("cities", cities);
// console.log("data", data);
*/

function getCityByChLength(length) {
  let data = DATA.filter((ele) => {
    return ele.city.length > length;
  });
  const cities = data.map((e) => {
    return e.city;
  });
  return cities;
}

const x = getCityByChLength(15);
console.log("x", x);
