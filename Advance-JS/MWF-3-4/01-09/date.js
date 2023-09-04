let date = new Date() // to get current date and time
// let date = new Date(0) // to get 0th date
// let date = new Date("2023/08/27")
// let date = new Date(1000*60*60*24)
// to get 0th date
console.log("date:", date.getMonth() + 1)
console.log("date:", date.getDay())
console.log("date:", date.getTime())
console.log("date:", date.getHours())
console.log("date:", date.getMinutes())
console.log("date:", date.getFullYear())
console.log("date:", date.getDate())

let fullDATE = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`

console.log(" fullDATE:", fullDATE)

