let obj = {
    name: "test",
    age: 80
}

let arr = []
for (const key in obj) {
    console.log("----", obj[key])
    arr.push(key)
}

let values = Object.values(obj)
console.log(" values:", values)
let keys = Object.keys(obj)
console.log(" keys:", keys)
let ent = Object.entries(obj)
console.log(" ent:", ent)
// let values = Object.values(obj)

// important //imp
// let o = {
//     a: { a2: 30 }, b: 90, c: 70
// }
// let x = "a"

// console.log("---===>", o[x].a2) //o.a
