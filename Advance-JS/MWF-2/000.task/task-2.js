/* 
Create a function that takes two numbers as arguments and returns their sum.

addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10 

Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


//  a ,b =>  b-a  negetive nahi ana chahiye

function possibleBonus(a, b) {
  let diffrence = b - a;
  if (diffrence > 0 && diffrence <= 6) {
    return true;
  } else {
    return false;
}
}

console.log("-----------  possibleBonus----------->", possibleBonus(3, 7));
console.log("-----------  possibleBonus----------->", possibleBonus(1, 9));
console.log("-----------  possibleBonus----------->", possibleBonus(5, 3));
console.log("-----------  possibleBonus----------->", possibleBonus(1, 7));

*/

//----------------------------------------------------------------

/*
1234.5 => 1234 => t => ++ => 2
123.4 => 123 => t => ++ => 3
12.3 => 12 => t => ++ => 4
1.2 => 1 => t => ++ => 5
0.1 = 0 => f => break
function countDigit(no) {
  let count = 1;
  while (true) {
    no = Math.floor(no / 10);
    console.log("-----------  no----------->", no)
    
    if (no > 0) {
      count++;
    } else {
      break;
  }
}

console.log("-----------  count----------->", count);
// let str = no.toString()
// console.log("-----------  str----------->", str.length)
return;
}

countDigit(12345);

*/

/*
function isNotEmpty(data) {
  if (!data) {
    return false;
  }
  let ans = JSON.stringify(data);
  if (ans === "{}" || ans === "[]") {
    return false;
  }
  return true;
}

console.log("-----------isNotEmpty--------->", isNotEmpty({ a: 20 }));
console.log("-----------isNotEmpty--------->", isNotEmpty(""));
console.log("-----------isNotEmpty--------->", isNotEmpty([10]));
console.log("-----------isNotEmpty--------->", isNotEmpty([]));
*/

/*
function generation(no, gender) {
  let str = "son";

  if (gender === "fe") str = "daughter";

  if (no < 0) {
    str = "mother";
    if (gender === "m") {
      str = "father";
    }
  }

  if (no === 2 || no === -2) {
    str = "grand " + str;
  }

  if (no === 3 || no === -3) {
    str = "great grand " + str;
  }
  console.log("-----------  str----------->", str);

  // 1 : son    -1 : father
  // 2 : grand  -2 : grand
  // 3 : great  -3 : great
}

generation(-2, "m");


function generation(no, gender) {
  let str = gender === "fe" ? "daughter" :"son";
  let obj = {
    2: "grand ",
    3: "great grand ",
  };

  if (no < 0) {
    no = Math.abs(no++);
    str = gender === "m" ? "father" : "mother";
  }

  str = (obj[no] || "") + str;
  console.log("-----------  str----------->", str);

  // 1 : son    -1 : father
  // 2 : grand  -2 : grand
  // 3 : great  -3 : great
}

*/
// "urvish v patel" 3 => "urVisH_v_paTel" 

 // 1234234 => _*_**_* , odd="_" , even="*"


  // 4326442312  2 =>  2 is repeate 3 times  
