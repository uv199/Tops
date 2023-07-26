let family = {
  grandfather: "bhaveshbhai",
  son: [
    {
      id: 10,
      name: "rohitbhai",
      age: 45,
      gender: "male",
      child: [
        {
          name: "sanket",
          age: 18,
          gender: "male",
        },
        {
          name: "rutvi",
          age: 23,
          gender: "female",
        },
      ],
    },
    {
      id: 20,
      name: "dhavalbhai",
      age: 38,
      gender: "male",
      vehicleDetails: [{ name: "passion", no: 123 }],
      child: [
        {
          name: "ansh",
          age: 9,
          gender: "male",
        },
        {
          name: "pari",
          age: 13,
          gender: "female",
        },
      ],
    },
  ],
};

function findFamilyById(id) {
  let abc = family.son.find((ele) => {
    return ele.id === id;
  });
  let childName = abc.child.filter((e) => {
    return e.age > 18;
  });
  return childName;
}

console.log(findFamilyById(10));
