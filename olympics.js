//Preliminaries
var var1 = 5;
if (var1 > 3) {
    console.log(var1 + " " + "is greater than 3");
}

var pet = "cat";
if (pet.length == 3) {
    console.log("3 is the length of " + pet);
}

var pet1 = "cat";
var pet2 = "dog";
if (pet1 == pet2) {
    console.log(pet1 + " and " + pet2 + " are the same");
} else {
    console.log(pet1 + " and " + pet2 + " are not the same");
}

//Bronze Medal
var person = {
    firstName: "Bobby",
    age: 12
};

if (person.age >= 18 && person.firstName.charAt(0) == "B") {
    console.log(person.firstName + " is allowed to go to the movie");
} else if (person.age >= 18 || person.firstName.charAt(0) == "B") {
    console.log(person.firstName + " is allowed to go to the movie");
} else {
    console.log(person.firstName + " is not allowed to go to the movie");
}

//Silver Medal 
var value = 1;

if (value === "1") {
    console.log(`"${value}" and "1" are strict`);
} else if (value == "1") {
    console.log(`${value} and "1" are loose`);
} else {
    console.log(`${value} and "1" are not equal at all`);
}

//this print statement will never get executed
//because of the AND
if (1 <= 2 && 2 == 4) {
    console.log("yes");
}

//Gold Medal 

var myAnswer = var1 > 3 ? var1 + " is greater than 3" : var1 + " is not greater than 3";
console.log(myAnswer);

function isAllowed (age, name) {
    return (age >= 18 || name.charAt(0) == "B" ? name + " is allowed to go to the movie" : name + " is not allowed to go to the movie");
}
console.log(isAllowed (person.age, person.firstName));

var response = (1 < 2 == 2 && 2 == 4) ? true : false; 
console.log(response);

var myPet = "dog";
if (typeof myPet === 'string') {
    console.log(`"${myPet}" is a string`);
} 

var dataType;
switch (typeof dataType) {
    case 'string': 
        console.log(dataType + " " + "is a string");
        break;
    case 'number':
        console.log(dataType + " " + "is a number");
        break;
    case 'boolean':
        console.log(dataType + " " + "is a boolean");
        break;
    case 'object':
        console.log(dataType + " " + "is an object");
        break;
    case 'function': 
        console.log(dataType + " " + "is a function");
        break;
    default:
        console.log(dataType + " " + "is undefined");
        break;
}


var myLetter = "s";
if ((myLetter.charCodeAt() - 96) > 12) {
    console.log("s is the 19th letter of the alphabet");    
}

//for lowercase letters
var newLetter = "a";
if ((newLetter.charCodeAt() - 96) == 1) {
    console.log("a is the 1st letter of the alphabet");
}

//for uppercase letters 
var finalLetter = "Z";
if ((finalLetter.charCodeAt() - 64) == 26) {
    console.log("this letter must be a Z!");
}


function isEven (n) {
    return (n ? "number is even" : "number is odd");
}

var myNum = 22;
if (myNum % 2 == 0) {
    console.log(isEven(true));
} else {
    console.log(isEven(false));
}