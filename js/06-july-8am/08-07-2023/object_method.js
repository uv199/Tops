/*


*/
let emp = {
  id: 102,
  name: "Shyam Kumar",
  salary: 40000,
  print: function () {
    console.log("-----print------");
  },
};

let keys = Object.keys(emp);
console.log("keys :", keys);

let value = Object.values(emp);
console.log("value :", value);

let enrites = Object.entries(emp);
console.log("enrites :", enrites);

emp.print();
