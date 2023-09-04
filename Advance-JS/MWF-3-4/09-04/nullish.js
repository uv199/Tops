// || returns the first truthy value.
// ?? returns the first defined value.


// let x = 0 || false || 200 // null/undefined/0/false
let x = 0 || 100 // null/undefined/0/false
console.log("x:", x)

let y = false ??  100 // null/undefined
console.log("y:", y)

