/*
setTimeout(() => {
    console.log("------>")
}, 5000)


let id = setInterval(() => {
    console.log("---interval-----")
}, 2000)


setTimeout(() => {
    clearInterval(id)
}, 7000)

*/
let x = 0

let id = setInterval(() => {
    x++
    console.log("--->", x)
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 7000)
