// function fun1(params) {
//     setTimeout(() => {
//         console.log("-----> urvish")
//     }, 2000);
// }

// function fun2(params) {
//     console.log("---> patel")
// }
// fun1()
// fun2()
function fun1(callBack1, callBack2) {
    setTimeout(() => {
        console.log("--Urvish--")
        callBack1(callBack2)
    }, 2000);
}

function fun2(cb) {
    console.log("--Patel--")
    cb()
}

function fun3() {
    console.log("--2000--")
}

fun1(fun2, fun3)
// fun1(() => {
//     console.log("--Patel--")
// })
