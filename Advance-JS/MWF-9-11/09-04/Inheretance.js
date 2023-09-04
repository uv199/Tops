class User1 {
    print() { console.log("---->this.subject") }
}


class User {
    constructor(obj) {
        this.name = obj?.name
        this.age = obj?.age
        this.fees = obj?.fees
        this.salary = obj?.salary
    }
    login() {
        console.log("---->login")
    }
    print() {
        console.log("---->this.subject")
    }
}



class Teacher extends User {
    constructor(data) {
        super(data)
        this.subject = "math"
    }
    printSalary() {
        console.log("---->salary", this.salary)
    }
}

class Student extends User {
    printFees() {
        console.log("---->fees", this.fees)
    }
    print() {
        super.print()
        console.log("---->this.subject-----> student")
    }
}

let sObj = {
    name: "s-1",
    age: 16,
    fees: 1000,
}
let tObj = {
    name: "t-1",
    age: 35,
    salary: 1000,
}
let s = new Student(sObj)
// console.log("🚀 ~ file: Inheretance.js:28 ~ s:", s)
// s.login()
// s.printFees()
let t = new Teacher(tObj)
// console.log("🚀 ~ file: Inheretance.js:30 ~ t:", t)
// t.print()
s.print()

// t.printSalary()

console.log("t instanceof User:", t instanceof User1)
