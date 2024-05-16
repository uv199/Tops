function print(name) {
  console.log("hello world" + name);
  return 100;
}

// let returnVal = print(" js");
// console.log("🚀 ~ returnVal:", returnVal);
// print(" uv")

function printNum(a, b, c, _) {
  console.log("🚀 ~ printNum ~ a:", a);
  console.log("🚀 ~ printNum ~ b:", b);
  console.log("🚀 ~ printNum ~ c:", c);
  console.log("🚀 ~ printNum ~ _:", _);
}

// printNum(10, null, 20);

/*
const printName = (a) => {
    console.log("---->", a);
};
*/
const printName = (a) => a + 10;
// const printName = (a) => { return  a + 10 }; // need to defined returen keyword while we use curly brackets

let ans = printName(10);
console.log("🚀 ~ ans:", ans);

// hosisting
// let vs var vs const
// this key word
// fat arraow function vs normal function
