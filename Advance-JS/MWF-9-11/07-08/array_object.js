let a = ["str", null, undefined, 12, [], {}, function test() {}];
a[2];

console.log(typeof a);
let name = ["test1", "test2", "test3"];

// //  obj====================================================
let obj = {
  name: "test",
  no: 50,
  o: {
    test: 40,
  },
  arr: [1, { mno: 90 }],

  // can store every data type in key
};

obj.no; // 50

obj.o.name; // 40

obj.arr[1]; // { mno: 90 }

obj.arr[1].mno; //  90
