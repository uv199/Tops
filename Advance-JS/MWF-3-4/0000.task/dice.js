function generateNumb() {
    let x = Math.trunc(Math.random() * 7) + 1
    console.log("🚀 ~ file: dice.js:3 ~ generateNumb ~ x:", x)

}
// generateNumb()
// generateNumb()
// generateNumb()
// generateNumb()


function generateWithLoop(params) {
    for (let i = 2; i > 0; i++) {
        let x = Math.trunc(Math.random() * 100) + 1
        if (x % 2 === 0) return x
    }
}

let num = generateWithLoop()
