/*
let user = {
  name: "urvish",
  10: "red",
  "first name": "patel",
};

//  we can access value of object by '.' operator
// objectName.keyName
console.log("-----------  user.name----------->", user.name);
console.log("-----------  user.10----------->", user[10]);
console.log("-----------  user.first name----------->", user["first name"]);
*/

let user = {
  staring: "string",
  num: 12,
  nul: null,
  undf: undefined,
  boll: true,
  arr: [
    1,
    2,
    3,
    [
      1,
      2,
      {
        a: 20,
        b: 50,
        c: [
          [
            1,
            2,
            3,
            {
              student: {
                city: "surat",
              },
            },
          ],
        ],
      },
    ],
  ],
  subObj: {
    a: 10,
    b: { b1: 30, b2: 40 },
  },
  print: function () {
    console.log("hello world urvish");
  },
};

console.log("--->", user.arr[1]);
console.log("--->", user.hello);
console.log("----->", user.subObj.b.b2);
console.log("----->", user.arr[3][2].c[0][3].student.city);

user.print();


