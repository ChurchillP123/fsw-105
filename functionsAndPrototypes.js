class Employee {
    static employees = [];
    #salary
    #status

    constructor(name, title, salary, status = "Full Time") {
        this.name = name;
        this.title = title;
        this.#salary = salary;
        this.#status = status;
        Employee.employees.push(this);    
    }
    
    get status() {
        return this.#status;
    }
    set status(status) {
        this.#status = status;
    }
    printEmployeeForm() {
        return `Name: ${this.name}, Title: ${this.title}, Salary: ${this.#salary}, Status: ${this.status}`;
    }
}

let emp1 = new Employee("Churchill", "Senior Web Developer", 100000, "Contract");
let emp2 = new Employee("Perry", "Junior Web Developer", 90000);
let emp3 = new Employee("Michael", "Entry Level Developer", 60000, "Part-Time");

console.log(emp1.printEmployeeForm());
console.log(emp2.printEmployeeForm());
console.log(emp3.printEmployeeForm());
console.log('-------');
console.log(Employee.employees);


















