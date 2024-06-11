let arr = [
  {
    subject: "hindi",
    marks: 57,
  },
  {
    subject: "gujarati",
    marks: 75,
  },
  {
    subject: "English",
    marks: 87,
  },
  {
    subject: "Maths",
    marks: 66,
  },
];

// ["hindi","gujarati","English","Maths"]
let average = 0;
arr.map((e) => {
  average += e.marks;
});
console.log("-----------  average----------->", average / arr.length);
let subjects = arr.map((e) => e.subject);
console.log("-----------  subjects----------->", subjects);

let subarr = ["hindi", "gujarati", "English", "Maths"];
let subjectsArr = subarr.map((e) => {
  return { subjects: e };
});
console.log("-----------  subjectsArr----------->", subjectsArr);

//  find a index of subject maths

let index = arr.findIndex((e) => e.subject === "Maths");
console.log("-----------  index----------->", index);


