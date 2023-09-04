let ARRAY = [1, 2, 3, 4, 50, 6, 7, 8, 9]
/*

function print(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) break
        // arr[i]
        console.log("arr[i]:", arr[i])
    }
}


print(ARRAY, 3)
print(ARRAY, 50)


// -------------------------------------------------------

let total = 0
for (let i = 0; i < ARRAY.length; i++) {
    total = total + ARRAY[i]
}

// ---------------------------------------------------
*/

let x = [1, 2, 3, 4]


x.reverse()
console.log(x)

// for (let i = 0; x.length >= 1; i++) {
//     console.log("x:", x)
//     x.shift()
// }
let returnArr = x
let result = x.reduce((LRV,e,i,arr ) => {
console.log("🚀 ~ file: array.js:39 ~ result ~ arr:", arr)

//   rerturn arr 
})
console.log("🚀 ~ file: array.js:43 ~ result:", result)
