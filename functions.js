/*
//Requirement #1
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

//add an infinite number of arguments 
function addAll(...nums) {
    const answer = nums.reduce((acc, num) => acc + num);
    return answer;
}
console.log(addAll(3, 3, 3, 3, 9));
console.log(addAll(2, 3));

//find the largest number within infinte number of arguments
function largestNum(...nums) {
    const number = nums.reduce((acc, num) => acc > num ? acc : num);
    return number;
    
}
console.log(largestNum(5, 7, 9, 12));


/*
//Test calls
console.log(addTwoNumbers(5, 7));
console.log(addTwoNumbers(50, 51));

//Requirement #2
function largestNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

//Test calls
console.log(largestNum(80, 60, 1));
console.log(largestNum(59, 30, 80));

//Requirement #3 
function evenOrOdd(num1) {
    if (num1 % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

//Test calls
console.log(evenOrOdd(5));
console.log(evenOrOdd(52));

//Requirement #4
function altString(string) {
    if (string.length <= 20) {
        return string.concat(string);
    } else {
        return string.slice(0, string.length / 2);
    }
}
//Test calls
console.log(altString("the"));
console.log(altString("The school is fun and I like it!!"));

*/
/*
//Extra Credit #1
var fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
function sumOfFibonacci(n) {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        console.log(fibonacciNumbers[i]);
        sum += fibonacciNumbers[i];
    }
    return sum;
}

//Test calls
console.log(sumOfFibonacci(6));

function fibonacci(n) {
    const newArray = fibonacciNumbers.slice(0, n);
    const sum = newArray.reduce((acc, num) => acc + num);
    return sum;
}
console.log(fibonacci(6));

/*
//Extra Credit #2
//Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. (White spaces count as a letter)

function letterOccurences(string) {
    
    var letterCount = {};
    var frequentLetter = '';
    var total = 0;
    
    for(value of string.toLowerCase()) {
        if (letterCount.hasOwnProperty(value)) {
            letterCount[value]++;
        } else {
            letterCount[value] = 1;
        }
        
        if (letterCount[value] > total) {
           total = letterCount[value];
          frequentLetter = value;
        }
    }
    return frequentLetter;
}

console.log(letterOccurences("cann"));


*/
/*
//the occurences of said char within a given string
function occurences(string, char) {
    let count = 0;
    let index = string.indexOf(char);
    
    while (index !== -1) {
        count++;
        index = string.indexOf(char, index + 1);
    }

    if (string.indexOf(char)){
        count = -1;
    }
    
    return count;n
}
console.log(occurences("the dotttg is dodo", 't'));


//function finds the occurences of said 'char' within the given string
function occurences(string, char) {
    const newArray = string.split('');
    let count = newArray.reduce((acc, letter) => (letter == char ? acc + 1 : acc), 0);
    return count;
}
console.log(occurences("the dotttg is dodo", 'o'));
*/

//function to find the most occurring letter in a given string
function mostOccurring (string) {
    const letterMap = {};
    let max = 0;
    let mostFrequentLetter = '';
    for (let letter of string.toLowerCase()) {
        if (letterMap.hasOwnProperty(letter)) {
            letterMap[letter]++;
        } else {
            letterMap[letter] = 1;
        }
        if (letterMap[letter] > max) {
            max = letterMap[letter];
            mostFrequentLetter = letter;
        }
    }
    
    console.log("Most frequent letter in " + string + " is: " + mostFrequentLetter + " and it appears " + max + " times.");
}
mostOccurring("bubble");
/*
function largestNumber(...args) {
    const largest = args.reduce((acc, num) => num > acc ? num : acc);
    return largest;
}
console.log(largestNumber(9, 8, 6, 10, 1));

*/
    

        




