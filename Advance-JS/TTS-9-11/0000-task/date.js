function getCurrentDate() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDate = new Date("2023/09/24");
  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let dayOfMonth = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  dayOfWeek = dayOfWeek === "Sunday" ? "today is funday" : dayOfWeek;
  //   if (dayOfWeek === "Sunday") {
  //     dayOfWeek = "today is funday";
  //   }

  return `Today is ${dayOfMonth}, ${month} ${year}, ${dayOfWeek}.`;
}

let currentDate = getCurrentDate();
console.log(currentDate);

function generateNum() {
  let x = null;

  for (let i = 0; i < 10; i--) {
    x = Math.random() * 10;
    x = Math.trunc(x);
    if (x <= 6 && x !== 0) {
      return x;
    }
  }
}

for (let i = 0; i < 5; i++) {
  console.log("your num is ", generateNum());
}
