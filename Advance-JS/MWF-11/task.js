let cityData = require("../../JS-assignment/data.json");
// console.log("-----------  cityData----------->", cityData);

cityData.sort((a, b) => a.population - b.population);
console.log("-----------  cityData----------->", cityData)
