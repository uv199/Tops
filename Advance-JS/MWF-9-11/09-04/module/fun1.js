function fun1(params) {
    console.log("----fun1---->")
}
function fun2(params) {
    console.log("----fun1---->")
}


// module.exports = {
//     fun1: fun1,
//     fun2: fun2
// }

exports.default = {
    fun1: fun1,
    fun2: fun2
}
