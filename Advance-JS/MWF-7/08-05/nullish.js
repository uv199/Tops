let x = 0 || 400 // take first truthy value -> 0,null,undefined,false,"" 
console.log("-----------  x----------->", x)


let y = false ?? 4000 // take first value 
console.log("-----------  y----------->", y)
