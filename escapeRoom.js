const readline = require('readline-sync');
const name = readline.question("What is your name? ");
console.log("Welcome " + name + " to the Escape Room Simulation!");

let gameOver = false;
let hasKey = false;

function option1() {
   console.log("You put your hand in the hole, " + name + ". Game Over!");
   gameOver = true;
}
function option2() {
    if (!hasKey) {
        hasKey = true;
        console.log("You have the key now, " + name + ". Go open the door");
    } else {
        console.log("You already have the key, " + name + ". Go open the door!!!");
    }
}
function option3() {
    if (hasKey) {
        console.log("Congratulations, " + name + ". You escaped the room successfully!!!");
        gameOver = true;
    } else {
        console.log("You need to find the key first, " + name + ". Find it and come back!");
    }
}

while(!gameOver) {
    const optionID = readline.keyIn('Press 1 to Put hand in the hole  \nPress 2 to Find the key  \nPress 3 to Open the door ', {limit: '$<1-3>'});
    switch(optionID) {
        case "1":
            option1();
            break;
        case "2":
            option2();
            break;
        case "3":
            option3();
            break;
    }
}

