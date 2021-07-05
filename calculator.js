const readline = require("readline-sync");
let firstNumber = readline.questionInt("Please enter your first number: ");
let secondNumber = readline.questionInt("Please enter your second number: ");
let operator = readline.question("Please enter the operation to perform (add, sub, mul, div): ");

class Calculator {
    constructor(num1, num2, operator) {
        this.num1 = num1;
        this.num2 = num2;
        if (operator == "add") {
            this.answer = this.add(this.num1, this.num2);
        } else if (operator == "sub") {
            this.answer = this.sub(this.num1, this.num2);
        } else if (operator == "mul") {
            this.answer = this.mul(this.num1, this.num2);
        } else if (operator == "div") {
            this.answer = this.div(this.num1, this.num2);
        } else {
            this.answer = "Invalid Operator!";
        }
    }
    add(num1, num2) { 
        return num1 + num2;
    }
    sub(num1, num2) {
        return num1 - num2;
    }
    mul(num1, num2) {
        return num1 * num2;
    }
    div(num1, num2) {
        return num1 / num2;
    }
}

const myCalculator = new Calculator(firstNumber, secondNumber, operator);
console.log("The result is: " + myCalculator.answer);
