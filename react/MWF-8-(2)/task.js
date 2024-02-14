// let task = ["task1", "task2"];
let task = [
  { task: "task1", time: 2 },
  { task: "task2", time: 2 },
];

// let available = task.includes("task1");
let available = task.some((e) => e.task === "task3");
console.log("-----------  available----------->", available);
let arr = [
  { value: "vapi", label: "Vapi" },
  { value: "Navsari", label: "Navsari" },
  { value: "Surat", label: "Surat" },
  // { value: "tapi", label: "Tapi" },
];

let arr2 = ["vapi", "Navsari", "Surat", "tapi"];

let newArr = arr.map((e) => e);
console.log("-----------  newArr----------->", newArr);
