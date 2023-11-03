let grandFather = {
  name: "Ramesh Bhai",
  age: 72,
  son: [
    {
      name: "Parag Bhai",
      age: 53,
      occupation: "Businessman",
      vehicle: [
        {
          name: "bike",
          number: 5161,
        },
      ],
      child: [
        {
          name: "Divyesh",
          age: 23,
        },
        {
          name: "Vishvesh",
          age: 28,
        },
      ],
    },
    {
      name: "Parag Bhai",
      age: 53,
      occupation: "Businessman",
      vehicle: [
        {
          name: "bike",
          number: 5161,
        },
      ],
      child: [
        {
          name: "Divyesh",
          age: 23,
        },
        {
          name: "Vishvesh",
          age: 28,
        },
      ],
    },
  ],
};

console.log(grandFather.name);
console.log(grandFather.age);
console.log(grandFather.son[0].name);


// `Ramesh Bhai's ${i+1} name is {}`
