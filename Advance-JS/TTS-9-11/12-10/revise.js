/*
function countTotal(userGivenArr) {
  let totals = userGivenArr.reduce((LRV, ele) => {
    let x = LRV + ele;
    return x;
  });
  return totals;
}
let x = [10, 20, 30];
let x2 = [1, 5, 8, 7];
let ArrTotal = countTotal(x);
console.log("ArrTotal", ArrTotal);

let totalOfX2 = countTotal(x2);
console.log("totalOfX2", totalOfX2);
*/

const DATA = [{ pop: "10" }, { pop: "20" }, { pop: "30" }, { pop: "40" }];

let totalPopulation = DATA.reduce((LRV, ele) => {
  console.log("ele", ele);
  console.log("LRV.pop", LRV.pop);
  return (+LRV.pop || LRV) + +ele.pop;
});
console.log("totalPopulation", totalPopulation);
