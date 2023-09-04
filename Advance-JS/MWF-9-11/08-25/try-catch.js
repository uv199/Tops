try {
    let a = 10
    // JSON.parse()
} catch (err) {
    console.log("---err--->", err)
}
function fun(params) {
    try {
        JSON.parse("")
        return "test"
    } catch (error) {
        return error.message
    }
}
console.log("🚀 ~ file: try-catch.js:18 ~ fun():", fun())
