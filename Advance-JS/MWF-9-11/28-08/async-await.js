function fun(params) {
    return new Promise((resolve, reject) => {
        resolve("------>")
    })
}
function fun1(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("---fun1--->")
        }, 2000);
    })
}

// async function apiCall(params) {
let apiCall = async (params) => {
    try {
        // let x = fun()
        // console.log(" x:", x)
        let y = await fun1()
        console.log(" y:", y)

    } catch (error) {

    }
}
apiCall()


// let apiCall = async (params) => {

//     fun().then((res) => {
//         fun1().then((fun1Res) => {

//         })
//     }).catch((err) => {

//     })

// }
