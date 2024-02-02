// let task = ["task1", "task2"];
let task = [
  { task: "task1", time: 2 },
  { task: "task2", time: 2 },
];

// let available = task.includes("task1");
let available = task.some((e) => e.task === "task3");
console.log("-----------  available----------->", available);
