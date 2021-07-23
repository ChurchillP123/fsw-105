const readline = require('readline-sync');
const firstNumber = readline.questionInt('Please enter your first number: ');
const secondNumber = readline.questionInt('Please enter your second number: ');
const operator = readline.question('Please enter the operation to perform (add, sub, mul, div): ');

class Calculator {
    
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }   
    static mul(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
}    
     
switch(operator) {
    case 'add': 
        console.log('The result is: ' + Calculator.add(firstNumber, secondNumber)); 
        break;   
    case 'sub':
        console.log('The result is: ' + Calculator.sub(firstNumber, secondNumber));
        break;
    case 'mul':
        console.log('The result is: ' + Calculator.mul(firstNumber, secondNumber));
        break;
    case 'div':
        console.log('The result is: ' + Calculator.div(firstNumber, secondNumber));
        break;
    default: 
        console.log('Invalid operator');
        break;
}







