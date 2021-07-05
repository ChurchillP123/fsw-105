
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];
/*
//function(s) called for multiple requirements
function isOldEnough(person) {
    if (person.age >= 18) {
        return true;
    } else {
        return false;
    }
}

function getGender(person) {
    if (person.gender == "male") {
        return true;
    } else {
        return false;
    }
}
*/

//Requirement #1
//for (itr in peopleWhoWantToSeeMadMaxFuryRoad) {
  //  if (isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad[itr])) {
  //      console.log("old enough");
  //  } else {
  //      console.log("not old enough");
  //  }
//}

function isOldEnough(array) { 
       
    array.forEach(key => key.age >= 18 ? console.log("old enough") : console.log("not old enough"));
}

isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad);


/*
//Requirement #2
for (itr in peopleWhoWantToSeeMadMaxFuryRoad) {
    if (isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad[itr])) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is old enough to see Mad Max.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is not old enough to see Mad Max.");
    }
}

//Requirement #3 
for(itr in peopleWhoWantToSeeMadMaxFuryRoad) {
    if(isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad[itr]) && getGender(peopleWhoWantToSeeMadMaxFuryRoad[itr])) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is old enough. HE'S good to see Mad Max Fury Road.");
    } else if (isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad[itr]) && !(getGender(peopleWhoWantToSeeMadMaxFuryRoad[itr]))) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is old enough. SHE'S good to see Mad Max Fury Road.");
    } else if (getGender(peopleWhoWantToSeeMadMaxFuryRoad[itr])) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is not old enough to see Mad Max Fury Road, don't let HIM in.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[itr].name + " " + "is not old enough to see Mad Max Fury Road, don't let HER in.");
    }
}

//Requirement #4
for (let i = 0; i < 101; i++) {
    if (!(i % 2 == 0)) {
        console.log(i + " is Odd.");
    } else {
        console.log(i + " is Even.");
    }
}

//Extra Credit
function numOfToggles(array) {
    var button = 0;
    for (let value of array) {
        button += value;
    }
    if (button % 2 == 0) {
        console.log("Light has been toggled " + button + " times and is currently off.");
    } else {
        console.log("Light has been toggled " + button + " times and is currently on.");
    }
}
*/

function numOfToggles(array) {

    const answer = array.reduce((acc, index) => acc + index);
    //ternary operator
    return answer % 2 == 0 ? "Light has been toggled " + answer + " times and is off." : "Light has been toggled " + answer + " times and is on.";
     
}

var myArray = [2, 4, 9];
console.log(numOfToggles(myArray));












