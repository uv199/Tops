let sum = false //  null,undefined,"",false,0

let a = sum || 500 // if sum have null, undefiend, 0, "", false then it will take 500
let b = sum ?? 500 // if sum have null or undefiend then it will take 500
console.log("-----------  a----------->", a)
console.log("-----------  b----------->", b)
