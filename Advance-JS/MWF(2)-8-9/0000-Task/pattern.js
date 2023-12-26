/*

1;
12;
123;
1234;
12345;


let arr =  "abcdefghijklmnopqrstuvwxyz".split("")
console.log("-----------  arr----------->", arr)
let x = 0;
for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += `${arr[j]}`;
    x++;
  }
  console.log(str);
  str = "";
}
*/

let no = ["11423424489", "1342142354234"];
let x = 0;
for (let i = 0; i < no.length; i++) {
  let currentNo = +no[i];
  let afterOne = +no[i + 1];
  let afterTwo = +no[i + 2];
  let afterThree = +no[i + 3];

  let conditioOne = x === 2;
  //   let conditioTwo = currentNo === afterOne && afterOne === afterTwo;
  let conditioTwo = false;
  let conditioThree =
    afterOne === currentNo + 1 &&
    afterTwo === currentNo + 2 &&
    afterThree === currentNo + 3;

  if (conditioOne || conditioTwo || conditioThree) {
    console.log("No is Unique");
    break;
  }

  if (no[i] === no[i + 1]) x++;
}

// Map((student)=>{
//   let total = 0
//   student.marks.Map((subject)=>{
// total+=subject.marks
//   })

// })

const classResult = [
  {
    name: "Vinay",
    marks: [
      {
        subject: "Hindi",
        marks: 81,
      },
      {
        subject: "English",
        marks: 50,
      },
      {
        subject: "Gujarati",
        marks: 92,
      },
      {
        subject: "Maths",
        marks: 88,
      },
    ],
  },
  {
    name: "Sanjay",
    marks: [
      {
        subject: "Hindi",
        marks: 33,
      },
      {
        subject: "English",
        marks: 77,
      },
      {
        subject: "Gujarati",
        marks: 99,
      },
      {
        subject: "Maths",
        marks: 97,
      },
    ],
  },
  {
    name: "Tushar",
    marks: [
      {
        subject: "Hindi",
        marks: 91,
      },
      {
        subject: "English",
        marks: 88,
      },
      {
        subject: "Gujarati",
        marks: 97,
      },
      {
        subject: "Maths",
        marks: 99,
      },
    ],
  },
];

// find all students percentage
// give hiegest percentage holder name
// give who have heigest percentage subject vise

let ans = [
  {
    subject: "Hindi",
    marks: 91,
    name: "Tushar",
  },
  {
    subject: "English",
    marks: 88,
    name: "Tushar",
  },
  {
    subject: "Gujarati",
    marks: 99,
    name: "sanjay",
  },
  {
    subject: "Maths",
    marks: 99,
    name: "Tushar",
  },
];
