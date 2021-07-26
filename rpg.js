class Player {
    #HP 

    constructor(name) {
        this.name = name;
        this.#HP = 40;
        this.inventory = [];
    }
    get HP() {
        return this.#HP;
    }
    heal() {
        if (this.#HP < 20){
            this.#HP += 20;
        }
    }
    printInventory() {
        return `Name: ${this.name}, HP: ${this.HP}, Items in Inventory: ${this.inventory}`;
    }
    randomEncounter(num) {
        let random = Math.random();
        if (random < num) {
            return true;
        } else if (random > num) {
            return false;
        }
    }
    exit() {
        console.log(`You quit the game ${this.name}. Goodbye!`);
        console.log(this.printInventory());
        this.#HP = 0;
    }
    attack() {
        return Math.floor(Math.random() * (20 - 5) + 5);
    }
    damage(amount) {
        this.#HP -= amount;
    }
    isDefeated(damage) {
        if (this.HP - damage <= 0) {
            return true;
        } else {
            return false;
        }
    }    
}

class Enemy extends Player {
    static wildEnemies = ['Dark Ogre', 'Dark Viper', 'Dark Night', 'Dark Wizard', 'Dark Goblin'];
    
    constructor() {
        super(Enemy.wildEnemies[Math.floor(Math.random() * 5)]);
        this.inventory = ['Gold', ' Iron', ' Corn', ' Coins', ' Sledgehammer'];
        
    }
    emptyInventory() {
        return this.inventory.splice(Math.floor(Math.random() * 5), 1);
    }
}

const readline = require('readline-sync');
const name = readline.question("What is your name? ");
console.log(`Welcome to the Dark Forest, ${name}. In this game, you will battle Dark Monsters. Good Luck!`);
const player = new Player(name);
let enemy = new Enemy();

function endGame(p1, p2, power) {
    if (p1.isDefeated(power)) {
        p1.damage(power);
        console.log(`${p2.name} attacked ${p1.name} with ${power} damage.`);
        console.log(`${p2.name} defeated ${p1.name} in the Dark Forest!`);
        p2.inventory.push(p1.inventory.pop());
        p2.heal();
        console.log(p1.printInventory());
        console.log('Game Over!');
        battle = false;
    } else {
        p1.damage(power);
        console.log(`${p2.name} attacked ${p1.name} with ${power} damage.`);
        console.log(p1.printInventory());
    }
}

let battle = true;

while (player.HP > 0 && enemy.HP > 0) {
    const option = readline.keyIn('Press [p] to Print Stats \nPress [w] to Walk \nPress [x] to Exit ', {limit: '<p, w, x>'});
    switch (option) {
        case 'p':
            console.log(player.printInventory());
            break;

        case 'w':
            if (player.randomEncounter(0.3)) {
                console.log('Walking...');
            } else {
                enemy = new Enemy();
                console.log('Sorry, you encountered a ' + enemy.name + '.');
                while (battle){
                    const option = readline.keyIn('Press [a] to Attack \nPress [r] to Run ', {limit: '<a, r>'});
                    switch(option) {
                        case 'a':
                            let attack = player.attack();
                            endGame(enemy, player, attack);
                            if (player.HP > 0 && enemy.HP > 0){
                                let counter = enemy.attack();
                                endGame(player, enemy, counter);
                            }
                            break;

                        case 'r':
                            if (player.randomEncounter(0.5)){
                                console.log(`You ran away safely from ${enemy.name}.`);
                                battle = false;
                            } else {
                                let attack = enemy.attack();
                                endGame(player, enemy, attack);
                            }
                            break;
                    }
                }
            }
            break;
        case 'x':
            player.exit();
            break;
    }
}
    