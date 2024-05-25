/*
let user = {
  name: "Raj",
  age: 25,
  address: "Bangalore",
};

// let name = user.name;
// let age = user.age;
// let address = user.address;

let { name, age, address } = user;

console.log("🚀 ~ name:", name);
console.log("🚀 ~ age:", age);
console.log("🚀 ~ address:", address);


let arr = [100, 200, 300];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, c, b,d] = arr;
console.log("🚀 ~ d:", d)
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ c:", c);


function getUser() {
  return {
    name: "Raj",
    age: 25,
    address: "Bangalore",
  };
}

// let user = getUser();
// console.log("🚀 ~ user:", user)
// console.log("🚀 ~ name:", user.name);
// console.log("🚀 ~ age:", user.age);
// console.log("🚀 ~ address:", user.address);

let { name, age, address } = getUser();
console.log("🚀 ~ name:", name);
console.log("🚀 ~ age:", age);
console.log("🚀 ~ address:", address);


// function sum(arr) {
  //   console.log(`sum of ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}`);
  // }
  
  
  function sum([no1, no2]) {
    console.log(`sum of ${no1} + ${no2} = ${no1 + no2}`);
    // print name and age
  }
  
  sum([10, 200]);
  
  */
function printUser({name,age}) {
  console.log("🚀 ~ age:", age)
  console.log("🚀 ~ name:", name)
  
}

printUser({ name: "urvish", age: 23 });
