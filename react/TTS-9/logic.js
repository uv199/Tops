/*
// let obj = [
//   {
//     a: 20,
//     child: [{ a: 20, child: [{ a: 20 }] }],
//   },
// ];

// obj.map((e) => {
//   Object.getOwnPropertyNames(child);
// });

// -----------------------------------

let x = {
  count: 0,
};

console.log("------>", x.count);

// x = x.count + 1;
x = {
  count: x.count + 1,
};
console.log("------>", x.count);

let pending = ["a", "b", "c", "d", "e", "f"];

let done = [];

let selected = [0, 1, 4];

let p = [];
let d = [];
pending.map((e, i) => {
  let avilable = selected?.includes(i);
  if (avilable) {
    d.push(e);
  } else {
    p.push(e);
  }
});

console.log("-----------  p----------->", p);
console.log("-----------  d----------->", d);

pending = p;
done = d;
console.log("-----------  pending----------->", pending);
console.log("-----------  done----------->", done);
// let arr = ["red", "yellow", "blue"];

// let value = [
//   { value: "red", label: "red" },
//   { value: "yellow", label: "yellow" },
//   { value: "blue", label: "blue" },
// ];

// let newArr = arr.map((e) => {
//   console.log("e", e);
//   return { value: e, label: e };
// });
// console.log("-----------  newArr----------->", newArr);
var coinChange = function (coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1);

  if (amount < 0) return -1;
  if (amount === 0) return 0;

  dp[0] = 0;

  for (var i = 1; i <= amount; i++) {
    for (var j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
let coin = [2000, 500, 400, 100, 50, 20, 10, 5, 1];
let amount = 1200;
let data = coinChange(coin, amount);
console.log("-----------  data----------->", data)
*/

/*
function HOF(params) {
  
}

function greet(params) {
  
}

HOF(greet)

function userHOC(cbFun) {
  console.log("heyy urvish " + cbFun());
}

function greetGenerator(time) {
  // let time = new Date().getHours();
  
  let greet = "Good morning";
  
  if (12 <= time && time < 16) greet = "Good Afternoon";
  if (16 <= time && time < 20) greet = "Good Evening";
  if (20 <= time) greet = "Good Night";
  console.log("-----------  time----------->", time);
  console.log("-----------  greet----------->", greet);
  return greet;
}

function askQustion(params) {
  return "How are you ?";
}

function work(params) {
  return "You should finished this work before EOD";
}

userHOC(greetGenerator);
userHOC(askQustion);
userHOC(work);


function Parent(user) {
  let name = user;
  return (greet) => {
    console.log("hello ", name, greet);
  };
}

// case one
// let user = Parent("user")
let user = (greet) => {
  console.log("hello ", "user", greet);
};
// case one
// let user = Parent("user-2")
let user2 = (greet) => {
  console.log("hello ", "user-2", greet);
};

user("good Morning");
let urvish = Parent("urvish");

// let urvish =  (greet) => {
  //   console.log("hello ", "urvish", greet);
  // };
  
  urvish("morning");
  urvish("afternoon");
  
  let manoj = Parent("manoj");
  // let manoj =  (greet) => {
    //   console.log("hello ", "manoj", greet);
    // };
    
    manoj("morning");
    */

// function Parent2(user, greet) {
//   console.log("hello ", user, greet);
// }

// Parent2("urvish", "morning");
// Parent2("urvish", "afternoon");
// Parent2("urvish", "night");

function setUserName(name) {
  const user = name;
  return function (greet) {
    console.log("hello ", user, greet);
  };
}

let urvishUser = setUserName("urvish");

urvishUser("morning");
urvishUser("afternoon");
urvishUser("night");
