let userDetails = [
  {
    name: "uv",
    age: 23,
    panCard: "FMGPP3019F",
  },
  {
    name: "vinita",
    age: 21,
  },
  {
    name: "zubair",
    age: 18,
  },
];

for (let i = 0; i < userDetails.length; i++) {
  console.log("---i----", i);
  console.log(`my name is ${userDetails[i].name}`);
}

let data = [
  {
    city: "Delhi",
    state_name: "Delhi",
    population: 32226001,
  },
  {
    city: "Mumbai",
    state_name: "Mahārāshtra",
    population: 24973000,
  },
  {
    city: "Kolkāta",
    state_name: "West Bengal",
    population: 18502000,
  },
  {
    city: "Bangalore",
    state_name: "Karnātaka",
    population: 15386000,
  },
  {
    city: "Chennai",
    state_name: "Tamil Nādu",
    population: 12395000,
  },
];

let totalPopulation = 0;

for (let i = 0; i < data.length; i++) {
  totalPopulation = totalPopulation + data[i].population;
}
console.log("-----------  totalPopulation----------->", totalPopulation);

let arr = [1, 2, 4, 7, 2, 3, 4];

let big = 0;
for (let i = 0; i < data.length; i++) {
  totalPopulation = totalPopulation + data[i].population;
}

// print big
