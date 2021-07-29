const readline = require('readline-sync');
const name = readline.question('What is your name? ');
console.log(`Welcome to the Dark Forest, ${name}. \nIf you defeat all the Dark Monsters then you win the game! Good luck...`);

class Player {
    
    #Inventory
    constructor(name) {
        this.name = name;
        this.position = {
            x: Math.floor(Math.random() * 10),
            y: Math.floor(Math.random() * 10)
        }
        this.HP = 40;
        this.#Inventory = [];
    }
    
    exit() {
        this.HP = 0;
    }
    printInventory() {
        return {name: this.name, position: this.position, HP: this.HP, Inventory: this.#Inventory};
    }
    sameLocation(opponent) {
        if (this.position.x == opponent.position.x && this.position.y == opponent.position.y) {
            return true;
        }
    }
    changeLocation(x, y) {
        this.position.x = x, this.position.y = y;
        
    }
    randomLocation() {
        this.changeLocation(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        console.log(this);
    }
    walk(opponent) {
        if (Math.random() < 0.3) {
            this.randomLocation();
        } else {
            this.changeLocation(opponent.position.x, opponent.position.y);
            console.log(this);
            console.log(`You encountered ${opponent.name}.`);
            console.log(opponent);
        }
    }
    run(opponent) {
        if (Math.random() <= 0.5) {
            this.randomLocation();
        } else {
            let damage = opponent.attack();
            this.damage(damage);
            console.log(`${opponent.name} attacked ${this.name} with ${damage} damage.`);
            isDefeated(opponent, this);
            
        }
    }
    attack() {
        return Math.floor(Math.random() * (20 - 5) + 5);
    }
    damage(val) {
        this.HP -= val;
    }
    heal() {
        this.HP <= 20 ? this.HP += 20 : this.HP += 0;
    }
    pickUp(item) {
        this.#Inventory.push(item);
    }
    
}

class Enemy extends Player {
    static enemies = ['Dark Goblin', 'Dark Knight', 'Dark Ogre', 'Dark Wizard'];
    #Inventory 
    
    constructor() {
        super(Enemy.enemies[Math.floor(Math.random() * Enemy.enemies.length)]);
        this.#Inventory = ['Coins', 'Gold', 'Bronze', 'Silver'];
    }
    loot() {
        let item = this.#Inventory.splice(Math.floor(Math.random() * this.#Inventory.length), 1);
        return item.toString();
    }
    printInventory() {
        return {name: this.name, position: this.position, HP: this.HP, Inventory: this.#Inventory};
    }
    remove() {
        for (let i = 0; i < Enemy.enemies.length; i++) {
            if (Enemy.enemies[i] == this.name) {
                Enemy.enemies.splice(i, 1);
            }
        }
    }
}
function validAttack(attacker, attacked) {
    if (attacker.HP > 0) {
        let attack = attacker.attack();
        attacked.damage(attack);
        console.log(`${attacker.name} attacked ${attacked.name} with ${attack} damage.`);
        isDefeated(attacker, attacked);
    }
}

function battle(attacker, attacked) {
    validAttack(attacker, attacked);
    validAttack(attacked, attacker);
}


function isDefeated(attacker, attacked) {
    if (attacked instanceof Enemy) {
        if (attacked.HP <= 0 && Enemy.enemies.length > 0) {
            console.log(`You defeated ${attacked.name}.`);
            attacker.heal();
            attacker.pickUp(attacked.loot());
            
            console.log(attacker.printInventory());
            attacked.remove();
            attacked.changeLocation(10, 10); //out of bounds

            enemy = new Enemy();
        } else if (attacked.HP <= 0 && Enemy.enemies.length == 0) {
            console.log('You defeated all the Dark Monsters in the Dark Forest. Congratulations!');
            console.log(attacker.printInventory());
            attacked.changeLocation(10, 10);
            attacker.exit();
            
            
        }
    } else {
        if (attacked.HP <= 0) {
            console.log(`${attacker.name} defeated you in the Dark Forest.`);
            console.log(attacked.printInventory());
            attacked.changeLocation(10, 10); //out of bounds
            attacked.exit(); 
            
        }
    }
}


const player = new Player(name);


while (player.HP > 0) {
    let enemy = new Enemy();
    const option = readline.keyIn('Press [p] to Print Stats \nPress [w] to Walk \nPress [x] to Exit ', {limit: '<p, w, x>'});
    switch(option) {
        case 'p':
            console.log(player.printInventory());
            break;

        case 'w':
            player.walk(enemy);
            while (player.sameLocation(enemy)) {
                const option = readline.keyIn('Press [a] to Attack \nPress [r] to Run ', {limit: '<a, r>'});
                if (option === 'a') {
                    battle(player, enemy);
                } else {
                    player.run(enemy);
                }
            }
            break;

        case 'x':
            console.log(player.printInventory());
            player.exit();
            break;
    }
}












