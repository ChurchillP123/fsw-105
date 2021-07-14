const employees = new Array();

class Employee {
    constructor (name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.status = "Full Time";
        employees.push(this);
    }
    printEmployeeForm() {
        console.log(`Name: ${this.name}, Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
    }
    changeStatus() {
        this.status = "Contract";
    }
}

const employee1 = new Employee("Churchill", "Senior Web Developer", 120000);
const employee2 = new Employee("Michael", "Junior Web Developer", 100000);
const employee3 = new Employee("Perry", "Entry Level Web Developer", 80000);

employee3.changeStatus();

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

console.log(employees);



















