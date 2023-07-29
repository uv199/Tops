let obj = {
  name: "Ishwarlal Thakkar",
  occupation: "Cigarette Factory",
  age: "85",
  child: [
    {
      id: 10,
      name: "Nitin Thakkar",
      age: 60,
      occupation: "Cleaning Material Supplier",
      vehicalDetails: [{ vehicalName: "Shine", vehicalNo: "GJ05-EY-7047" }],
      child: [
        {
          name: "Harsh Thakkar",
          age: 28,
        },
        {
          name: "Rutvik Thakkar",
          age: 23,
        },
      ],
    },
    {
      id: 20,
      name: "Pravin Thakkar",
      age: 65,
      occupation: "Doctor",
      vehicalDetails: [{ vehicalName: "Kia", vehicalNo: "GJ02-CE-0245" }],
      child: [
        {
          name: "Mehul Thakkar",
          age: 35,
        },
      ],
    },
    {
      id: 30,
      name: "Kunj Thakkar",
      age: 73,
      occupation: "Cleaning Material Supplier",
      vehicalDetails: [{ vehicalName: "Shine", vehicalNo: "GJ05-EY-7047" }],
      child: [
        {
          name: "Gopi Thakkar",
          age: 33,
        },
        {
          name: "Karshan Thakkar",
          age: 30,
        },
        {
          name: "Radhika Thakkar",
          age: 29,
        },
      ],
    },
  ],
};

function finddata(id) {
  let matchData = obj.child.find((e) => {
    console.log("------>", e.id);
    return e.id === id;
  });

  // console.log("🚀 ~ file: task.js:67 ~ finddata ~ matchData:", matchData);
  if (!matchData) {
    return "data not found";
  } else {
    return matchData.vehicalDetails;
  }
}

let data = finddata(10);
console.log("finddata:", data);

[
  {
    name: "Gopi Thakkar",
    age: 33,
  },
  {
    name: "Karshan Thakkar",
    age: 30,
  },
  {
    name: "Radhika Thakkar",
    age: 29,
  },
];
