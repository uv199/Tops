// number
let number = 10.1;
// console.log(number);

// string

let str1 = 'hello"'; //  double court allow in single court
let str2 = "hello"; // single cour allow in double court
let str3 = `hello ' " `; // allow both double and single court inside back tikest
// console.log(str1)

// null
let x = null;
// console.log(x)

// undefined
let x2 = undefined;
// console.log(x2)

// boolean
let yes = true;
// console.log(yes);
let no = false;
// console.log(no);

let ans = 10 == 10;

// console.log(!ans);

let no1 = 50;

no1 += 30; // no1 = no1 + 30

// no1 -=20 //   no1 = no1 - 20

// no1

// console.log(x,x2)

// Array

let raj = [100, "string", true, null, undefined, [1, 2], { name: "string" }];

// to access value in array  => arrayName[index]
// NOTE : index is started from 0

// console.log(raj[0]);
// console.log(raj[5]);
// console.log(raj[5][0]);

// object

let obj = {
  1: 200,
  "first name": "string",
  name: "urvish",
  age: 20,
};

// to access value from  object  => objectName.keyName

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)
// console.log(obj[1]);
// console.log(obj["first name"]);

let keyName = "age"

console.log(obj[keyName])

let color = {
  1: "green",
  2: "red",
};

let index = 1

// console.log(color[index])


// first name  => first_name -> snake case 
// first name  => FirstName -> pascal case 


//  template litrals ${variable name} we can use varibale inside a string


let age1 = 29
let age2 = 26

let str12 = `my age is ${age1}`
console.log(str12)