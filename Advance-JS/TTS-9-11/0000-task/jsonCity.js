const data = require("../../../JS-assignment/data.json");
console.log("data", typeof data);

//   want all object where state_name key value is Karnātaka

function getCityByStateName(state) {
  let filteredData = data.filter((e) => {
    // console.log("--->", e);
    return e.state_name === state;
  });
  //   console.log("filteredData", filteredData);
  let cityArr = filteredData.map((e) => e.city);
  return cityArr;
}
let x = getCityByStateName("Delhi");
let y = getCityByStateName("Karnātaka");
console.log("y---->", y);
console.log("x---->", x);
