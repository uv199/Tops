let familyTree = {
  name: "test",
  age: 98,
  child: [
    {
      id: 10001,
      name: "vishnubhai",
      age: 55,
      occupation: "retired",
      vehicle: [
        {
          name: "passsion",
          number: 5040,
        },
        {
          name: "thar",
          number: 1111,
        },
      ],
      son: [
        {
          name: "urvish",
          age: 22,
        },
        {
          name: "toral",
          age: 30,
        },
      ],
    },
    {
      id: 10002,
      name: "jitubhai",
      age: 42,
      occupation: "retired",
      vehicle: [
        {
          name: "passsion",
          number: 5040,
        },
        {
          name: "thar",
          number: 1111,
        },
      ],

      son: [
        {
          name: "jigar",
          age: 29,
        },
        {
          name: "kavya",
          age: 32,
        },
      ],
    },
  ],
};

familyTree.son[2].vehicle.map((e) => {});
/*
1. dada ka name
2. dada's 2nd child name
3. dada's 2nd child's 2nd son
4. dada's 3nd child's 1st vehicle name
5. dada's 1st child's 1st vehicle number
*/

res1 = { name: "uv" };
return { ...res, city: "surat" };

res2 = { name: "uv", city: "surat" };
return { ...res2, age: 23 };

res3 = { name: "uv", city: "surat", age: 23 };

console.log(`my name is ${res3.name}`)