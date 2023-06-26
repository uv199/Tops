// special------------------------------------------------------->
// , => seprate karva mate

// let a
// let b

let a, b;

// delete =>to delete

let obj = { a: 20, b: 30 };
delete obj.a;

let arr = [1, 2, 3, 4, 5];
delete arr[3];

// function------------------------------------------------------->

let x = 10;
let y = 20;

x + y;

let m = 40;
let n = 50;

m + n;
function sum(n1, n2) {
  // n1 =m
  // n2 =n
  let total = n1 + n2;
  return total;
}

// let mno = sum("m", n); // =>n1="m"
let mno = sum(m, n); // =>n1=40 // call

// Object  ---------------------------------------------------->

// key-> [keys...]
// value-> [value...]
// entities-> [[key,value],[key,value]]

let data = {
  name: "test-1",
  print: function (params) {
    console.log(this.name); // works
  },
  print1: (params) => {
    console.log(this.name); // not works
  },
};

let str ="test"
let str2 =`test

manoj 

`

console.log('str  :', str );
console.log('str2 :', str2);