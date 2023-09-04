let arr = [
    {
        name: "urvish",
        age: 26
    },
    {
        name: "neel",
        age: 19
    },
    {
        name: "subh",
        age: 28
    },
    {
        name: "yagnik",
        age: 25
    }

]


arr.map((e) => {
    console.log("--e-->", e.name)
    console.log("--e-->",)
})

// let filteredArr = arr.filter((e) => e.age < 24)

let filteredArr = arr.filter((e) => {
    return e.age < 24
})
console.log(" filteredArr:", filteredArr)

let matchUser = arr.find((e) => {
    return e.name === "yagnik"
})
console.log("matchUser.name:", matchUser.name)
console.log("🚀matchUser:", matchUser)


/*
get_element_by_id = snake case
GetElementById = pascale case
getElementById =  camel case

urvishPatel
UrvishPatel
urvish_patel
*/


