let data = [
  { name: "uv", no: 1 },
  { name: "test", no: 4 },
  { name: "test1", no: 11 },
  { name: "test2", no: 3 },
  { name: "test3", no: 35 },
];

// let x = data.find((e) => {
//   console.log("----->", e.no);
//   return e.no === 123;
// });

// let filterData = data.filter((e) => {
//   console.log("=====", e.name.length);
//   return e.name.length < 4;
// });
// console.log("filterData:", filterData);
/*

son:[{ 
}]
*/

function xyz(arr, ele) {
  let a = arr.indexOf(ele);
  console.log("a:", a);
  if (a !== -1) {
    return "its available";
  } else {
    return "its not available";
  }
}

let msg = xyz([1, 2, 3, 4, 5], 8);
console.log("  msg:", msg);
