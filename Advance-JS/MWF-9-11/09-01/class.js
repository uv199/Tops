class User {
    constructor(name, age) {
        console.log("------>cunstructor")
        this.name = name
        this.age = age
    }
    print() {
        console.log("----->print", this.name, this.age)
    }
    count(year) {
        console.log(`my age is  ${this.age + year} after ${year} year`)
    }
}



let x = new User("urvish", 30)
let y = new User("laxmi", 20)
// let z = new User("laxmi", 20)
// let m= new User("laxmi", 20)
y.print()
y.count(7)
x.print()
x.count(6)















// function print(name) {
//     console.log("----->print", name)
// }
// let obj = {
//     name: "urvish",
//     age: 20
// }
// let obj2 = {
//     name: "laxmi",
//     age: 20
// }

// print(obj.name)
// print(obj2.name)



