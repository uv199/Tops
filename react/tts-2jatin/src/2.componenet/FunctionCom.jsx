import React from "react";

export default function FunctionCom() {
  return (
    <div>
      <h1>FunctionCom</h1>
      <h1>test</h1>
    </div>
  );
}

let data = [
  {
    lable: "activity",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1",
            subDropdown: null,
          },
        ],
      },
    ],
  },
  {
    lable: "activity-2",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1",
            subDropdown: null,
          },
        ],
      },
      {
        lable: "test1",
        subDropdown: [],
      },
    ],
  },
  {
    lable: "activity-3",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1.1",
            subDropdown: [
              {
                lable: "test1.1.1",
                subDropdown: [],
              },
            ],
          },
        ],
      },
      {
        lable: "test2",
        subDropdown: [],
      },
    ],
  },
];
