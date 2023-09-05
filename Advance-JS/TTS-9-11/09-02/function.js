function fun(a, b, c) {
    console.log("----->")
    return [1, 2, 2]
}


let x = fun(1, [1, 2, 3, 3])

let fun2 = function () {

    console.log("----------------->")

}
fun2()

const fun3 = (x) => {
    console.log("---fun3------------>", x)
}
fun3(100000)
