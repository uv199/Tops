let obj = {
  id: 10001,
  name: "vishnubhai",
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
};

let jasonStr = JSON.stringify(obj);
console.log("jasonStr", typeof jasonStr);
console.log("jasonStr", jasonStr);

let normalData = JSON.parse(`{ "name": "tets" }`);
console.log("normalData", normalData);
