function oddEven(arr, type) {
  if (type === "odd") {
    let odd = arr.filter((e) => e % 2 === 1);
    return odd;
  } else {
    let even = arr.filter((e) => e % 2 === 0);
    return even;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let odd = oddEven(arr, "odd");
let even = oddEven(arr, "even");
let name = ["urvish patel", "vinni sharma", "disha bulsara"];
// bulsara
let available = name.some((e) => {
  return e.length > 6;
});
let num = [11, 2, 3, 4, 54645, 567, 8, 9, 0, 9]; // find any number have more then 4 charactor
// let num = [1,2,3,4,5,6,7,8,9]; // find 15 avilable or not
// let num = [1,2,3,4,5,6,7,8,9]; // reducer  sum of odd num

let data = {
  name: "urvish",
  markSheet: [
    {
      subject: "english",
      marks: 50,
    },
    {
      subject: "maths",
      marks: 95,
    },
    {
      subject: "science",
      marks: 85,
    },
  ],
};

let max = 0;
let sub = "";

data.markSheet.map((e) => {
  if (e.marks > max) {
    sub = e.subject;
    max = e.marks;
  }
});

console.log("-----------  total----------->", sub);

// const arr = [1, 2];

const result = arr.reduce((acc, curr, index) => {
  console.log("acc");
  return index % 2 === 0 ? acc + curr : acc - curr;
}, 0);
// t => 0,1,0
// f => 1,2,1
// t => -1,3,2
// f => 2,4,3
// t => -2,5,4
// 3

// console.log(result);

//  a,e,i,o,u =>0
// "urvish" => "0rv0sh"
// "test" => "t0st"
// "needhi" => "n00dh0"
