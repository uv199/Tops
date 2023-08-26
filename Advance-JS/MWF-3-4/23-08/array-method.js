let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5]
console.log(" arr:", arr)

/*
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// let subArr = arr.slice(1, 4)
let subArr = arr.slice(1, -2)
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// arr.splice(3, 4) // remove
// arr.splice(1, 3, "1", "2") //add and remove
arr.splice(9, 0, "10") // only add

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

let x = arr.find((e) => {
    console.log("--->", e)
    return e > 5
})

let filterData = arr.filter((e) => {
    console.log("--->", e)
    return e > 5
})
// findIndex is like find, but returns the index instead of a value.

let ind = arr.findIndex((ele) => {
    return ele > 5

})
// forEach(func) – calls func for every element, does not return anything.\
let x = arr.forEach((e) => {
    console.log(e)
    // return e
})
// map(func) – creates a new array from results of calling func for every element.
let x = arr.map((e, i) => {
    return e + 2
})
let A = [1, 2, 3, 4]
let total = A.reduce((lastReturnValue, e, i) => {
    console.log("lastReturnValue, e, i:", lastReturnValue, e,)
    return e + lastReturnValue
    
})

let len = A.length
console.log("🚀 ~ file: array-method.js:48 ~ len:", len)
console.log("🚀 ~ file: array-method.js:46 ~ total ~ total:", total)


*/


let join = arr.join("----")
let tostr = arr.toString()
console.log("~ tostr:", tostr)
console.log("~ join:", join)
