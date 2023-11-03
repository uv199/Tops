let today = new Date();
console.log("today", today);

console.log("year---", today.getFullYear());
console.log("month---", today.getMonth());
console.log("getDay---", today.getDay());
console.log("getMinutes---", today.getMinutes());

function printDate(params) {
  const today = new Date("2023/11/5");
  console.log(
    `Date: ${today.getDate()} / ${
      today.getMonth() + 1
    } / ${today.getFullYear()}`
  );
}

printDate();
