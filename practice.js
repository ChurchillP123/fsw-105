/*
class Person {
    static #people = [];
    constructor(publicValues) {
        Object.assign(this, publicValues);
        
        Person.pushEmployees(this);
        
    }
    static pushEmployees(arg) {
        this.#people.push(arg);
    }
    static get people() {
        return this.#people;
    }
}

const Churchill = new Person({name: 'Churchill', age: 23, job: 'Full Stack Web Developer'});
const Perry = new Person({name: 'Perry', age: 24, job: 'Junior Stack Web Developer' });

console.log(Person.people);

*/


const x_yMin = 0;
const x_yMax = 10;





class Person {
    #inventory
    
    constructor(name) {
        this.name = name;
        this.position = {
            x: Math.floor(Math.random() * x_yMax),
            y: Math.floor(Math.random() * x_yMax)
        }
        this.HP = 40;
        this.#inventory = [];
        
    }
    inventory(item) {
        this.#inventory.push(item);
    }
    sameLocation(opponent) {
        if (this.position.x == opponent.position.x && this.position.y == opponent.position.y) {
            return true;
        }
    }
    changeLocation(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
    move(random, opponent) {
        if (Math.random() <= random) {
            let x = Math.floor(Math.random() * x_yMax);
            let y = Math.floor(Math.random() * x_yMax);
            this.changeLocation(x, y);
            if (this.sameLocation(opponent) && x == 10) {
                this.changeLocation(0, 0);
                console.log(this);
                
            } else if (this.sameLocation(opponent) && x == 0) {
                this.changeLocation(10, 10);
                console.log(this);

            } else if (this.sameLocation(opponent)) {
                this.changeLocation(x + 1, y + 1);
                console.log(this);

            } else {
                this.changeLocation(x, y);
                console.log(this);
            }
        } else {
            this.changeLocation(opponent.position.x, opponent.position.y);
            console.log(this);
        }
               
    }
    
    attack() {
        return Math.floor(Math.random() * (20 - 5) + 5);
    }
    heal() {
        this.HP <= 20 ? this.HP += 20 : this.HP += 0;
    }
    
    exit() {
        console.log('Goodbye!');
        console.log(this);
        console.log(this.printInventory());
        this.HP = 0;
    }
    printInventory() {
        return this.#inventory;
    }
    damage(val, opponent) {//main battle function 
        if (this.HP - val <= 0) {
            console.log(`${this.name} got hit with ${val} damage and was defeated.`);
            this.HP -= val;
            console.log(this);
            console.log(opponent);
            console.log(this.printInventory());
        } else {
            console.log(`${this.name} got hit with ${val} damage.`);
            console.log(this);
            console.log(opponent);
            this.HP -= val;
        }
        
    }
}







class Enemy extends Person {
    #inventory
    static enemies = ['Dark Goblin', 'Dark Knight', 'Dark Ogre', 'Dark Wizard', 'Dark Blob'];
    constructor() {
        super(Enemy.enemies[Math.floor(Math.random() * 5)]);
        this.#inventory = ['Gold', 'Silver', 'Bronze', 'Copper', 'Iron'];
    }
    randomPrize() {
        let item = this.#inventory[Math.floor(Math.random() * 5)];
        this.#inventory.splice(item, 1);
        return item;
    }
}

const readline = require('readline-sync');
const player = new Person('Churchill');
const enemy = new Enemy();

while (player.HP > 0 && enemy.HP > 0) {
    
    if (player.sameLocation(enemy)){
        let option = readline.keyIn('Press [a] to Attack \nPress [r] to Run ', {limit: '<a, r>'});
        switch(option) {
            case 'a':
                let attack = player.attack();
                let counter = enemy.attack();
                enemy.damage(attack, player);
                if (enemy.HP > 0) {
                    player.damage(counter, enemy);
                } else {
                    player.inventory(enemy.randomPrize());
                    player.heal();
                    console.log(player.printInventory());
                }
                break;

            case 'r':
                player.move(0.5, enemy);
                if (player.sameLocation(enemy)) {
                    let counter = enemy.attack();
                    player.damage(counter, enemy);
                }
                
                break;
                
        }
    } else {
        let option = readline.keyIn('Press [p] to Print Stats \nPress [w] to Walk \nPress [x] to Exit ', {limit: '<p, w, x>'});
        switch (option) {
            case 'p':
                console.log(player.printInventory());
                break;
            case 'w':
                console.log('Walking...');
                player.move(0.3, enemy);
                break;
            case 'x':
                player.exit();
                break;
        }

    }
    
}



























