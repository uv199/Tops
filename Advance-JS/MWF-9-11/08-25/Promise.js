let pro = new Promise((resolve, reject) => {
    // your work like find somthing 
    if (true) {
        console.log("patel ")
        resolve("yes i got data")
    } else {
        reject("data not found")
    }
})


pro.then((res) => {
    // console.log("res--->", res)
    return res + " yes buddy you got"
}).then((res1) => {
    // if (res1.length > 10) {
    //     throw new Error("data too Large")
    // }
    console.log("res1--->", res1)
}).then((res2) => {
    // console.log("res2--->", res2)
}).catch((err) => {
    console.log("errr---->", err)
})
