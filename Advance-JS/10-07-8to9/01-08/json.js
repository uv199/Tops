let obj = {
  name: "urvish",
  test: [1, "test"],
  age: 30,
  city: {
    a: "name",
  },
  boo: null,
  mno: true,
  data: undefined, // not works in json
};

let jsonString = JSON.stringify(obj);
console.log(" jsonString:", typeof jsonString);

let data = JSON.parse(jsonString);
console.log(" data:", data);
