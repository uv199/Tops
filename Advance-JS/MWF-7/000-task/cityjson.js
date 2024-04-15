const data = require("../../../JS-assignment/data.json");
// console.log("-----------  data----------->", data)

function getCityByStateName(stateName) {
  let filterData = data.filter((e) => {
    return e.state_name === stateName;
  });
  let responseData = filterData.map((e) => {
    return e.city;
  });
  return responseData;
}

let data1 = getCityByStateName("Delhi");
console.log("-----------  data1----------->", data1)
let data2 = getCityByStateName("West Bengal");
console.log("-----------  data2----------->", data2)
