export const x = "hello";

let arr = [
  1,
  "string",
  null,
  undefined,
  true,
  // [1, 2, 3, [10, 20, 30, 40]],
  [1, 2, 3, { a: 30 }],
  { a: 20, b: 30 },
];

// arrayName[index]
console.log("----->", arr[5][2]);
console.log("----->", arr[5][3][2]);
console.log("----->", arr[15]);
console.log("----->", arr[6].b);

/*
let user = {
  name: "",
  vehicalDetails:[{}],
  child: [{ name, age }],
};
*/

let arr1 = [
  [
    1,2,3,
    [4,5,6,
      {
        test: "test",
        a: {
          a: [
            1,
            2,
            3,
            4,
            [
              {
                name: { a: { b: [1, 2, 3] } },
                age: [
                  1,
                  2,
                  {
                    d: "30",
                  },
                ],
              },
            ],
          ],
        },
      },
    ],
  ],
];
