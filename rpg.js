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
        return `Name: ${this.name}, HP: ${this.#HP}, Items in Inventory: ${this.inventory}`;
    }
    walk() {
        if (Math.random() <= 0.3) {
            return true;
        } else if (Math.random() >= 0.3) {
            return false;
        }
        
    }
    exit() {
        this.#HP = 0;
    }
    run() {
        if (Math.random() < 0.5) {
            return true;
        } else {
            return false;
        }
    }
    attack() {
        return Math.floor(Math.random() * (20 - 5) + 5);
    }
    damage(amount) {
        this.#HP -= amount;
    }
    addToInventory(item) {
        this.inventory.push(item);
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
    attack() {
        return Math.floor(Math.random() * (25 - 5) + 5);
    }
    
    
}

const readline = require('readline-sync');
const name = readline.question("What is your name? ");
console.log(`Welcome to the RPG Game, ${name}.`);
const player = new Player(name);
let enemy = new Enemy();



while (player.HP > 0 && enemy.HP > 0) {
    const option = readline.keyIn('Press [w] to Walk \nPress [p] to Print Stats \nPress [x] to Exit ', {limit: '<p, w, x>'});
    switch(option) {
        case 'x':
            player.exit();
            break;
        case 'p':
            console.log(player.printInventory());
            break;
        case 'w':
            if (player.walk()) {
                console.log('Walking...');
                break;
            } else {
                enemy = new Enemy();
                console.log('Sorry, you encountered a ' + enemy.name);
                let battle = true;
                while (enemy.HP > 0 && battle && player.HP > 0) {
                    const option = readline.keyIn('Press [r] to Run \nPress [a] to Attack \nPress [p] to Print Stats ', {limit: '<a, p, r>'});
                    switch(option) {
                        case 'p':
                            console.log(player.printInventory());
                            console.log(enemy.printInventory());
                            break;
                        case 'r':
                            if(player.run()) {
                                console.log('You escaped from ' + enemy.name + ' safely.');
                                battle = false;
                            } else {
                                
                                let damage = enemy.attack();
                                if (player.HP - damage <= 0) {
                                    player.damage(damage);
                                    console.log('Sorry, you got attacked by ' + damage + ' damage');
                                    console.log('You were defeated by ' + enemy.name);
                                    console.log(player.printInventory());
                                    console.log(enemy.printInventory());

                                } else {
                                    player.damage(damage);
                                    console.log('Sorry, you got attacked by ' + damage + ' damage');
                                }
                                
                               
                                
                            }
                            break;
                            
                        case 'a':
                            
                            let attack = player.attack();
                            let counterAttack = enemy.attack();
                            if (enemy.HP - attack <= 0) {
                                enemy.damage(attack);
                                console.log(`You attacked ${enemy.name} with ${attack} damage`);
                                console.log('Congratulations! You beat ' + enemy.name);
                                player.addToInventory(enemy.emptyInventory());
                                console.log('You received a prize!');
                                player.heal();
                                console.log(player.printInventory());
                                console.log(enemy.printInventory());

                            } else if (player.HP - counterAttack <= 0) {
                                enemy.damage(attack);
                                console.log(`You attacked ${enemy.name} with ${attack} damage`);
                                player.damage(counterAttack);
                                console.log(`You got hit by ${enemy.name} with ${counterAttack} damage`);
                                console.log('You were defeated by ' + enemy.name);
                                console.log(player.printInventory());
                                console.log(enemy.printInventory());
                            } else {
                                enemy.damage(attack);
                                console.log('You hit ' + enemy.name + ' with ' + attack + ' damage.');
                                player.damage(counterAttack);
                                console.log('You got hit by ' + enemy.name + ' with ' + counterAttack + ' damage.');
                            }
                            
                            break;
                        }
                            
                    }
                }
               
              
            }
}

            

    













