class Teacher {
    constructor(name, age, salary) {

        this.name = name
        this.age = age
        this.salary = salary
    }
    incrementedSalary() {
        console.log("----->print", this.salary + (this.salary * (5 * 5) / 100))
    }
}


const x = new Teacher("test", 50, 100000)
x.incrementedSalary(5)
