/*

*/
// -------------------------------search-------------------------------
let allData = ["uv", "mn", "mw", "st", "cm"];
let searchTxt = "mn";
let filterData = allData.filter((e) => {
  return e.includes(searchTxt);
});
console.log("-----------  filterData----------->", filterData);
